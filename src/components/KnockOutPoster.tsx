// "Knock out cancer" poster for the hero. Pure markup + inline SVG, no images.

// One glove hanging cuff-up, drawn in a 100×140 box.
function Glove({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      {/* mitt */}
      <path
        d="M24 62 C 10 70, 8 110, 26 128 C 42 142, 72 140, 84 124 C 96 106, 92 72, 76 62 Z"
        fill="#c2413a"
      />
      {/* thumb */}
      <path
        d="M26 74 C 8 76, 4 100, 18 106 C 26 109, 32 102, 32 92 Z"
        fill="#a8342e"
      />
      {/* knuckle seam */}
      <path
        d="M34 116 C 48 124, 66 124, 80 112"
        fill="none"
        stroke="#8f2a25"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* shine */}
      <path
        d="M70 76 C 80 84, 82 98, 78 108"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* cuff */}
      <rect x="24" y="36" width="54" height="30" rx="7" fill="#2b2b2b" />
      <rect x="30" y="46" width="42" height="7" rx="3.5" fill="#dcb68e" />
    </g>
  );
}

function Gloves({ className }: { className: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 160" className={className}>
      {/* laces tied at the top */}
      <path
        d="M100 2 L 61 40 M100 2 L 141 44"
        stroke="#2b2b2b"
        strokeOpacity="0.55"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="100" cy="4" r="4" fill="#2b2b2b" fillOpacity="0.7" />
      <Glove transform="translate(8 4) rotate(8 50 40)" />
      <Glove transform="translate(194 10) scale(-1 1) rotate(10 50 40)" />
    </svg>
  );
}

export function KnockOutPoster() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -right-4 -bottom-4 h-full w-full rounded-[2rem] bg-ink/85"
      />
      <figure
        aria-label="You think you’re tough? I’m gonna knock out cancer."
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cream via-white to-sand px-8 pt-8 pb-10 shadow-[0_30px_60px_-20px_rgba(43,43,43,0.35)] ring-1 ring-ink/5 sm:px-10"
      >
        <div
          aria-hidden
          className="absolute -top-20 -left-20 size-64 rounded-full bg-sun/30 blur-2xl"
        />

        {/* Hanging gloves */}
        <Gloves className="absolute top-0 right-5 w-36 drop-shadow-[0_14px_12px_rgba(43,43,43,0.25)] sm:right-8 sm:w-44" />

        <div className="relative flex flex-col leading-none text-ink">
          <span className="text-sm font-bold tracking-[0.3em] text-gold uppercase">
            Team Tamer
          </span>
          <span className="mt-8 text-2xl font-bold sm:text-3xl">You think</span>
          <span className="mt-1 font-serif text-3xl text-gold italic sm:text-4xl">
            you’re
          </span>
          <span className="font-serif text-6xl font-bold tracking-tight sm:text-7xl">
            tough?
          </span>
          <span className="mt-5 text-2xl font-bold sm:text-3xl">I’m gonna</span>
          <span className="relative mt-2 w-fit">
            <span
              aria-hidden
              className="absolute inset-x-[-0.35rem] bottom-1 h-5 -rotate-1 rounded-md bg-sun/70 sm:h-6"
            />
            <span className="relative font-serif text-5xl font-black tracking-tight uppercase sm:text-6xl">
              Knock out
            </span>
          </span>
          <span className="mt-2 font-serif text-5xl text-[#c2413a] italic sm:text-6xl">
            cancer.
          </span>
        </div>
      </figure>
    </div>
  );
}
