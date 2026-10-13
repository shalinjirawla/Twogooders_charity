// Content that changes over time. Add entries here (newest first) until a backend/form feeds this data.

export type Update = {
  /** Shown as written, e.g. "October 12" */
  date: string;
  text: string;
};

export type Wish = {
  id: string;
  text: string;
};

export type Donor = {
  /** Leave out (or set anonymous) for donors who chose to stay anonymous */
  name?: string;
  anonymous?: boolean;
};

/**
 * Family updates, NEWEST FIRST. The first entry is shown under "The latest";
 * everything after it rolls into "Up until now" automatically.
 */
export const updates: Update[] = [];

/** Open wishes on the wish list. */
export const wishes: Wish[] = [
  { id: "wish-1", text: "Dinner for the kids at 6pm on Friday October 16th." },
];

/** People who have donated, shown in the rolling thank-you box at the end of the page. */
export const donors: Donor[] = [];
