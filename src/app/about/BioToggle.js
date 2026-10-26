"use client";

import { useState } from "react";

/**
 * The only interactive piece of the About page, so the page itself stays a server
 * component and the bios ship as HTML instead of JavaScript.
 *
 * preview: the bio shows as a fading excerpt until opened (cards with no "most good" blurb).
 * Otherwise the bio is in the HTML but hidden until opened. `after` renders between the bio
 * and the button, where the "Where does … do the most good?" blurb sits.
 */
export default function BioToggle({ name, preview = false, light = true, after = null, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {preview ? (
        <div className={open ? "ab-bioFull" : "ab-bioPreview"}>{children}</div>
      ) : (
        <div className={"ab-bioFull"} hidden={!open}>{children}</div>
      )}
      {after}
      <button
        type="button"
        className={light ? "ab-viewBioBtnLight" : "ab-viewBioBtn"}
        onClick={() => setOpen(value => !value)}
        aria-expanded={open}
      >
        {open ? "Hide bio" : `Meet ${name}`}
      </button>
    </>
  );
}
