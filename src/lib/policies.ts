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

/** The two groups, in the order they appear on the index page. */
export const POLICY_GROUPS = [
  {
    id: "legal" as const,
    title: "Legal",
    blurb:
      "The terms you are agreeing to by using this site, and what we do with any information you give us.",
  },
  {
    id: "how-we-work" as const,
    title: "How we work with AI",
    blurb:
      "We sell AI governance, so we publish our own. These are the policies we hold ourselves to, in full, including the parts that constrain us.",
  },
];

/** Published policies, ordered as they should appear. */
export async function getPolicies(): Promise<Policy[]> {
  return (await getCollection("policies")).sort(
    (a, b) => a.data.order - b.data.order
  );
}

/** Published policies for one group, ordered. */
export async function getPoliciesInGroup(group: string): Promise<Policy[]> {
  return (await getPolicies()).filter((p) => p.data.group === group);
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
