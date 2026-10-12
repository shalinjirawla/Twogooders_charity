import Image from "next/image";

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";

const links = [
  { href: "#updates", label: "Updates" },
  { href: "#join", label: "Join Team Tamer" },
  { href: "#wish-list", label: "Wish List" },
  { href: "#messages", label: "Messages" },
];

const amounts = ["$25", "$50", "$100", "$250"];

// Lucide-style line icons, inlined to keep the site fully static.
const icons = {
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  gift: (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  dollar: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
};

function Icon({
  name,
  className = "size-6",
}: {
  name: keyof typeof icons;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name]}
    </svg>
  );
}

const ways: {
  icon: keyof typeof icons;
  title: string;
  text: string;
  href: string;
}[] = [
  {
    icon: "heart",
    title: "Prayers & Love",
    text: "Send a message of hope to Tamer and the family.",
    href: "#messages",
  },
  {
    icon: "gift",
    title: "Grant a Wish",
    text: "Help with a meal, an errand or a ride.",
    href: "#wish-list",
  },
  {
    icon: "users",
    title: "Join Team Tamer",
    text: "Stay posted on Tamer’s progress and events.",
    href: "#join",
  },
  {
    icon: "dollar",
    title: "Donate",
    text: "Give once or monthly toward treatment and care.",
    href: "#donate",
  },
];

export function SiteHeader() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-ink text-cream">
        <div
          className={`${container} flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2.5 text-center text-sm sm:text-base`}
        >
          <Icon name="heart" className="hidden size-4 text-sun sm:block" />
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
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#donate"
            className="ml-auto flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm font-bold tracking-wide text-cream shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:px-7 sm:py-2.5 sm:text-base lg:ml-0"
          >
            <Icon name="heart" className="size-4 text-sun" />
            Donate
          </a>
        </nav>
      </header>

      {/* Fundraiser hero */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-br from-sun via-sun/80 to-sand"
      >
        <div
          aria-hidden
          className="absolute -top-32 -right-32 size-[30rem] rounded-full bg-white/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-24 size-[26rem] rounded-full bg-gold/30 blur-3xl"
        />

        <div
          className={`${container} relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[7fr_5fr] lg:gap-16`}
        >
          {/* Appeal */}
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <span className="flex items-center gap-2.5 rounded-full bg-cream/85 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-ink/80 uppercase shadow-sm sm:text-sm">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
              </span>
              Active Medical Fundraiser
            </span>
            <h1 className="font-serif text-4xl leading-[1.1] font-bold text-ink sm:text-6xl lg:text-7xl">
              Stand With Tamer &amp; His Family
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink/85 sm:text-xl">
              Tamer is fighting Stage 4 cancer. Your prayers, meals, errands and
              donations help his family focus on what matters most: being
              together.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#donate"
                className="flex items-center justify-center gap-2 rounded-full bg-ink px-9 py-4 font-bold tracking-wide text-cream shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Icon name="heart" className="size-5 text-sun" />
                Donate Now
              </a>
              <a
                href="#join"
                className="flex items-center justify-center rounded-full border-2 border-ink px-9 py-4 font-bold tracking-wide text-ink transition hover:bg-ink hover:text-cream"
              >
                Join Team Tamer
              </a>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base font-bold text-ink/75 lg:justify-start">
              {["One-time or monthly", "Every prayer counts", "Help in any way"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <Icon name="check" className="size-4 text-ink" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Donation card */}
          <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-7 shadow-[0_30px_60px_-20px_rgba(43,43,43,0.35)] ring-1 ring-ink/5 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-sun/30 text-gold">
                <Icon name="heart" className="size-6" />
              </span>
              <div>
                <p className="font-serif text-2xl font-bold">
                  Support Tamer’s Fight
                </p>
                <p className="text-sm text-muted">Choose an amount to give</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {amounts.map((a) => (
                <a
                  key={a}
                  href="#donate"
                  className="rounded-xl border-2 border-ink/10 py-3 text-center text-xl font-bold transition hover:border-gold hover:bg-sun/15"
                >
                  {a}
                </a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 rounded-full bg-sand p-1 text-sm font-bold">
              <a
                href="#donate"
                className="rounded-full py-2 text-center text-muted transition hover:text-ink"
              >
                One time
              </a>
              <a
                href="#donate"
                className="rounded-full bg-white py-2 text-center shadow-sm"
              >
                Monthly
              </a>
            </div>

            <a
              href="#donate"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-ink py-4 font-bold tracking-wide text-cream shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Icon name="heart" className="size-5 text-sun" />
              Donate Now
            </a>
            <p className="mt-4 text-center text-sm text-muted italic">
              small monthly donations are extremely helpful!
            </p>
          </div>
        </div>
      </section>

      {/* Ways to help */}
      <section className="border-b border-ink/5 bg-cream">
        <div className={`${container} py-14 sm:py-16`}>
          <p className="text-center text-sm font-bold tracking-[0.25em] text-gold uppercase">
            Ways you can help
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ways.map((w) => (
              <li key={w.title}>
                <a
                  href={w.href}
                  className="group flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lg hover:ring-gold/40"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-sun/25 text-gold transition group-hover:bg-ink group-hover:text-sun">
                    <Icon name={w.icon} />
                  </span>
                  <span className="font-serif text-xl font-bold">
                    {w.title}
                  </span>
                  <span className="text-base leading-relaxed text-muted">
                    {w.text}
                  </span>
                  <span
                    aria-hidden
                    className="mt-auto text-xl text-ink/30 transition group-hover:translate-x-1 group-hover:text-ink"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
