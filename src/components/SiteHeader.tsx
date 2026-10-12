import Image from "next/image";

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";

const links = [
  { href: "#updates", label: "Updates" },
  { href: "#join", label: "Join Team Tamer" },
  { href: "#wish-list", label: "Wish List" },
  { href: "#messages", label: "Messages" },
];

export function SiteHeader() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-ink text-cream">
        <div
          className={`${container} flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2.5 text-center text-sm sm:text-base`}
        >
          <span className="font-bold">
            Help the Tamer family through every step of treatment
          </span>
          <a
            href="#donate"
            className="font-bold text-sun underline underline-offset-4 hover:text-cream"
          >
            Give Monthly ›
          </a>
        </div>
      </div>

      {/* Sticky navigation */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
        <nav className={`${container} flex h-16 items-center gap-6 sm:h-20`}>
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <Image
              src="/icon.svg"
              alt=""
              width={40}
              height={40}
              unoptimized
              className="size-9 rounded-lg sm:size-10"
            />
            <span className="font-serif text-xl font-bold sm:text-2xl">
              Team Tamer
            </span>
          </a>
          <ul className="ml-auto hidden items-center gap-7 font-bold text-ink/80 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#donate"
            className="ml-auto rounded-full bg-ink px-5 py-2 text-sm font-bold tracking-wide text-cream shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:px-7 sm:py-2.5 sm:text-base lg:ml-0"
          >
            Donate
          </a>
        </nav>
      </header>

      {/* Fundraiser banner */}
      <section id="top" className="relative overflow-hidden bg-sun/80">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.55),transparent_50%)]"
        />
        <div
          className={`${container} relative flex flex-col items-center gap-6 py-14 text-center sm:py-20`}
        >
          <span className="rounded-full bg-cream/80 px-4 py-1 text-xs font-bold tracking-[0.2em] text-ink/80 uppercase sm:text-sm">
            Medical Fundraiser · Family Support
          </span>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight font-bold text-ink sm:text-6xl">
            Stand With Tamer &amp; His Family
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ink/80 sm:text-xl">
            Tamer is fighting Stage 4 cancer. Your prayers, meals, errands and
            donations help his family focus on what matters most: being
            together.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href="#donate"
              className="rounded-full bg-ink px-9 py-3.5 font-bold tracking-wide text-cream shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Donate Now
            </a>
            <a
              href="#join"
              className="rounded-full border-2 border-ink bg-transparent px-9 py-3.5 font-bold tracking-wide text-ink transition hover:bg-ink hover:text-cream"
            >
              Join Team Tamer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
