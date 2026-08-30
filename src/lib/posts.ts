/* ------------------------------------------------------------------ */
/*  Which blog posts are live, and when                                */
/*                                                                     */
/*  A whole week of posts is committed at once, on or before Sunday.   */
/*  Nothing but this file decides which of them the build includes, so */
/*  every consumer must go through `getPublishedPosts()` — the blog    */
/*  index, the per-post pages, and the 404 page's "recent posts".      */
/*  A consumer that calls getCollection("blog") directly would leak    */
/*  next week's posts, and there is no test that would catch it.       */
/*                                                                     */
/*  PUBLISHING SCHEDULE                                                */
/*                                                                     */
/*    Posts are dated Monday to Friday and go live at 10:00 Cambodia   */
/*    time (ICT, UTC+7) on their own date, which is 03:00 UTC. A cron  */
/*    trigger rebuilds the site at 03:00 UTC daily; the build is a     */
/*    static snapshot, so nothing appears until a build runs.          */
/*                                                                     */
/*    `publishDate` is a bare date, which Astro coerces to midnight    */
/*    UTC. Comparing against `now` therefore makes a post eligible     */
/*    from 00:00 UTC on its date — three hours before the scheduled    */
/*    build. That slack is deliberate: a push for an unrelated fix at, */
/*    say, 01:00 UTC still publishes that day's post rather than       */
/*    silently holding it back until the next cron run.                */
/*                                                                     */
/*    The related Blotato queue posts to LinkedIn and Facebook at      */
/*    03:00 ICT, seven hours ahead of the blog. That is intentional    */
/*    and safe only because no social post links to a post URL. If a   */
/*    future social post ever does, either move the build earlier or   */
/*    move that day's social later — check before assuming.            */
/* ------------------------------------------------------------------ */

import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** Posts whose publish date has arrived, newest first. */
export async function getPublishedPosts(now: Date = new Date()): Promise<Post[]> {
  return (await getCollection("blog"))
    .filter((post) => post.data.publishDate.valueOf() <= now.valueOf())
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}
