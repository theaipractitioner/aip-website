/* ------------------------------------------------------------------ */
/*  Which policies are published, and how they are grouped             */
/*                                                                     */
/*  Every consumer goes through here — the index, the policy pages and */
/*  the footer — so that a policy appears in all three or none. The    */
/*  set is whatever files exist in src/content/policies, which is how  */
/*  policies go live one at a time as each is approved.                */
/* ------------------------------------------------------------------ */

import { getCollection, type CollectionEntry } from "astro:content";

export type Policy = CollectionEntry<"policies">;

/* The index used to split these into a Legal group and a How-we-work group.
   That was dropped on 1 September 2026, once all seven were published and the
   split could be seen for what it did: five in one group and two in the other
   left an orphan card with a gap beside it, and the how-we-work blurb was a
   better statement of why the page exists than the hero it sat below. So the
   blurb moved up to the hero and the seven now run as one grid in policy
   number order.

   `group` is still on each policy in the content schema. It is accurate, it
   costs nothing, and it is what a future split would be built from. */

/** Published policies, ordered as they should appear. */
export async function getPolicies(): Promise<Policy[]> {
  return (await getCollection("policies")).sort(
    (a, b) => a.data.order - b.data.order
  );
}

/** One published policy by its ID, or undefined if it is not published yet.

    For the places that want to link to a specific policy — the privacy notice
    beside the contact form, for one — rather than to a list. Returning
    undefined rather than throwing is the point: the caller renders nothing
    until the policy exists, and the link appears on its own the day it does. */
export async function getPolicyById(
  policyId: string
): Promise<Policy | undefined> {
  return (await getPolicies()).find((p) => p.data.policyId === policyId);
}

/* The footer shows the ones a visitor might look for, not all of them. A
   seven-item legal column buries the two people actually want. The rest are
   one click away on the index, which the footer also links to.

   Listed by policy ID rather than slug so the footer keeps working if a
   policy is retitled, and filtered against what is actually published so
   there is never a dead link. */
const FOOTER_POLICY_IDS = ["AIP-PS-001", "AIP-PS-002", "AIP-PS-004"];

export async function getFooterPolicies(): Promise<Policy[]> {
  const published = await getPolicies();
  return FOOTER_POLICY_IDS.map((id) =>
    published.find((p) => p.data.policyId === id)
  ).filter((p): p is Policy => p !== undefined);
}
