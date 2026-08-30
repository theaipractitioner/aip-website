/**
 * Rebuilds the AIP website so that day's blog post goes live.
 *
 * THIS FILE IS NOT DEPLOYED FROM THIS REPO. It is the source of truth for
 * what should be pasted into the `daily-blog-publish` Worker in the
 * Cloudflare dashboard (Workers & Pages -> daily-blog-publish -> Edit
 * code). Kept here because a Worker that only exists in a dashboard text
 * box is a Worker nobody can review, diff, or restore.
 *
 * WHY IT EXISTS
 *
 * The site is a static build, so a post dated today does not appear until
 * a build runs. src/lib/posts.ts decides which posts are included; this
 * worker only triggers the build. It never chooses a post.
 *
 * SCHEDULE
 *
 * Cron is `0 3 * * MON-FRI` — 03:00 UTC, which is 10:00 Cambodia time on
 * the post's own date. Written MON-FRI rather than 1-5 on purpose: this
 * scheduler numbers Sunday as 1, so `1-5` silently means Sun-Thu and drops
 * every Friday post. The dashboard shows "estimated upcoming events" when
 * you edit the expression — read it before saving, it catches this.
 *
 * Blotato posts the matching LinkedIn and Facebook copy at 03:00 Cambodia
 * time, seven hours ahead of the blog. That is safe only while no social
 * post links to a blog post URL. Check before assuming.
 *
 * CONFIG
 *
 * DEPLOY_HOOK_URL — a Pages deploy hook for the theaipractitioner project
 * on master, stored as an encrypted secret on the Worker. There is
 * deliberately no HTTP trigger: the workers.dev URL is guessable and every
 * build costs build minutes.
 */
export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(triggerBuild(env));
  },

  async fetch() {
    return new Response("Scheduled worker. No HTTP trigger.\n", { status: 404 });
  },
};

async function triggerBuild(env) {
  if (!env.DEPLOY_HOOK_URL) {
    console.error("DEPLOY_HOOK_URL is not set; no build was triggered");
    return;
  }
  const res = await fetch(env.DEPLOY_HOOK_URL, { method: "POST" });
  if (res.ok) {
    console.log("deploy hook accepted, build queued");
  } else {
    console.error(`deploy hook rejected: ${res.status} ${await res.text()}`);
  }
}
