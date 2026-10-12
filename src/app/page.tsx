import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-cream/60 px-4 py-3 outline-none transition placeholder:text-ink/40 focus:border-ink/50 focus:bg-white focus:ring-4 focus:ring-sun/30";

const buttonClass =
  "cursor-pointer rounded-full bg-ink px-8 py-3 font-bold tracking-wide text-cream shadow-md transition hover:-translate-y-0.5 hover:shadow-lg";

const card =
  "rounded-3xl bg-white p-7 shadow-[0_10px_40px_-15px_rgba(31,59,58,0.25)] ring-1 ring-ink/5 sm:p-10";

function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif text-3xl font-bold leading-tight tracking-wide text-gold sm:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

function Accent({ center = false }: { center?: boolean }) {
  return (
    <span
      aria-hidden
      className={`mt-4 block h-1 w-16 rounded-full bg-sun ${center ? "mx-auto" : ""}`}
    />
  );
}

function Box({ className = "" }: { className?: string }) {
  return (
    <div
      className={`min-h-40 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm ${className}`}
    />
  );
}

function Field({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-bold tracking-wider text-ink/80"
      >
        {label}
      </label>
      <input id={id} type={type} className={inputClass} />
    </div>
  );
}

function Tick({
  type,
  name,
  label,
}: {
  type: "radio" | "checkbox";
  name: string;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-ink/15 px-4 py-3 font-bold transition hover:border-ink/40 has-checked:border-ink has-checked:bg-sand/60">
      <input
        type={type}
        name={name}
        className="size-5 cursor-pointer appearance-none rounded border-2 border-ink/50 bg-white checked:border-ink checked:bg-ink"
      />
      {label}
    </label>
  );
}

export default function Home() {
  return (
    <>
    <SiteHeader />
    <main className="overflow-x-hidden text-lg">
      {/* ---------- Family update ---------- */}
      <section className="relative bg-gradient-to-b from-sand/70 to-cream">
        <div
          className={`${container} grid items-start gap-12 py-14 sm:py-20 lg:grid-cols-[5fr_7fr] lg:gap-20`}
        >
          {/* PHOTO OF THE FAM */}
          <div className="relative mx-auto w-full max-w-md lg:sticky lg:top-10">
            <div
              aria-hidden
              className="absolute -right-4 -bottom-4 h-full w-full rounded-[2rem] bg-sun/70"
            />
            <Image
              src="/charity.png"
              alt="Photo of the fam"
              width={481}
              height={640}
              priority
              className="relative w-full rounded-[2rem] shadow-2xl"
            />
          </div>

          <article className="flex flex-col gap-6 leading-relaxed text-ink/90">
            <p className="w-fit rounded-full bg-ink px-5 py-1.5 text-sm font-bold tracking-widest text-cream uppercase">
              October 6
            </p>
            <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
              Our family has been chosen for yet another trial.  While we didn’t
              expect to step into the cancer world again, it picked another
              strong fighter.  This time, my best friend, partner, husband and
              the love of my life….Tamer.
            </p>
            <p>
              Earlier in September, and with a super healthy, active lifestyle
              and almost no symptoms, Tamer was diagnosed suddenly with Stage 4
              cancer.  Needless to say, navigating this chapter has been beyond
              difficult, triggering and at times unbearable.
            </p>
            <p>
              The power of prayers is something that carried us for years, it
              was the light that showed us miracles with our son Zein. It will
              be our beacon again.  Please pray for Tamer and for us. Pray
              specifically that we identify the best treatment for his cancer,
              to ease his pain that has been escalating rapidly, to guide the
              medical team to the best decisions with the best outcome for Tamer
              and for strength and patience for our family.
            </p>
            <p className="font-bold text-ink">
              Until then…we do what we do best…we choose joy!
            </p>
          </article>
        </div>
      </section>

      {/* ---------- Quote band ---------- */}
      <section className="bg-sand text-ink">
        <div className={`${container} py-16 text-center sm:py-20`}>
          <span aria-hidden className="mx-auto mb-10 block h-1 w-16 rounded-full bg-sun" />
          <blockquote className="mx-auto max-w-4xl font-serif text-2xl leading-snug italic sm:text-4xl">
            “We might not be living our most beautiful days, but there’s always
            something beautiful in every day we live”
          </blockquote>
        </div>
      </section>

      {/* ---------- What's going on ---------- */}
      <section id="updates" className="py-20 sm:py-28">
        <div className={container}>
          <div className="text-center">
            <Heading>WHAT’S GOING ON WITH TAM &amp; THE FAM</Heading>
            <Accent center />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold tracking-[0.2em] text-ink/70">
                  THE LATEST
                </h3>
                {/* Spot for Radwa or TJ to add the newest update. */}
                <Box />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold tracking-[0.2em] text-ink/70">
                  UP UNTIL NOW
                </h3>
                {/* Previous updates in chronological order, each led by its date. */}
                <div className="max-h-96 overflow-y-auto rounded-2xl">
                  <Box className="min-h-56" />
                </div>
              </div>
            </div>

            <div className="flex min-h-80 items-center justify-center rounded-3xl border-2 border-dashed border-ink/20 bg-sand/50">
              <p className="font-bold tracking-widest text-ink/60">
                PHOTO OF TAMER
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- It's Tamer time ---------- */}
      <section className="relative bg-sun/90">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_55%)]"
        />
        <div className={`${container} relative py-20 text-center sm:py-24`}>
          <h2 className="font-serif text-4xl font-bold underline decoration-ink decoration-4 underline-offset-[12px] sm:text-6xl">
            IT’S TAMER TIME!
          </h2>
          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-ink sm:text-2xl">
            Many people have asked how they can help. This website was created
            to make it easy for our village to join Team Tamer and help our
            family focus on spending good times together as we move through
            treatment.  It is also how we can keep you all posted on the family
            and Tamer’s progress, as well as any events hosted in support of
            this journey. We are grateful for any help given, be it prayers,
            errands, meals, or financial assistance.  Good jokes that make us
            laugh are always a bonus 😊
          </p>
        </div>
      </section>

      {/* ---------- Join + Wish list ---------- */}
      <section className="py-20 sm:py-28">
        <div className={`${container} grid items-start gap-8 lg:grid-cols-2`}>
          <div id="join" className={card}>
            <Heading className="text-2xl sm:text-3xl">
              IT TAKES A VILLAGE TO BEAT CANCER - JOIN TEAM TAMER
            </Heading>
            <Accent />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field id="join-name" label="Name" />
              <Field id="join-email" label="Email" type="email" />
              <Field id="join-cell" label="Cell" type="tel" />
              <Field id="join-address" label="Address" />
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label
                  htmlFor="join-message"
                  className="text-sm font-bold tracking-wider text-ink/80"
                >
                  SHORT MESSAGE:
                </label>
                <input
                  id="join-message"
                  type="text"
                  maxLength={50}
                  placeholder="With you as you kick some cancer ass!"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div id="wish-list" className={`${card} bg-gradient-to-br from-white to-sand/50`}>
            <Heading className="text-2xl sm:text-3xl">WISH LIST</Heading>
            <Accent />
            <p className="mt-6 font-bold text-ink/80">
              click on the wish you want to grant; enter your name, cell and
              logistical messaging
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {/* Each wish opens a pop-up box (native HTML popover, no JavaScript). */}
              <button
                type="button"
                popoverTarget="wish-1"
                className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-sun hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="size-3 shrink-0 rounded-full bg-sun"
                />
                <span className="leading-relaxed">
                  Dinner for the kids at 6pm on Friday October 16<sup>th</sup>.
                </span>
                <span
                  aria-hidden
                  className="ml-auto text-2xl text-ink/30 transition group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </button>
            </div>
          </div>

          <div
            id="wish-1"
            popover="auto"
            className="m-auto w-[min(34rem,calc(100%-2rem))] rounded-3xl bg-white p-7 shadow-2xl backdrop:bg-ink/50 backdrop:backdrop-blur-sm sm:p-10"
          >
            <div className="flex flex-col gap-5">
              <p className="font-serif text-xl font-bold leading-snug">
                Dinner for the kids at 6pm on Friday October 16<sup>th</sup>.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="wish-1-name" label="Name" />
                <Field id="wish-1-email" label="Email" type="email" />
                <div className="sm:col-span-2">
                  <Field id="wish-1-cell" label="Cell" type="tel" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="wish-1-message"
                  className="text-sm font-bold tracking-wider text-ink/80"
                >
                  SHORT MESSAGE:
                </label>
                <textarea id="wish-1-message" rows={3} className={inputClass} />
              </div>
              <button type="button" className={`self-end ${buttonClass}`}>
                SEND
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Messages + Financial ---------- */}
      <section className="bg-sand/60 py-20 sm:py-28">
        <div className={`${container} grid items-start gap-8 lg:grid-cols-2`}>
          <div id="messages" className={`${card} flex flex-col`}>
            <Heading className="text-2xl sm:text-3xl">
              MESSAGES TO TAMER &amp; THE FAM
            </Heading>
            <Accent />
            <label htmlFor="fam-message" className="sr-only">
              MESSAGES TO TAMER &amp; THE FAM
            </label>
            <textarea
              id="fam-message"
              rows={8}
              className={`${inputClass} mt-8`}
            />
            <button type="button" className={`mt-6 self-end ${buttonClass}`}>
              SEND
            </button>
          </div>

          <div id="donate" className={`${card} flex flex-col`}>
            <Heading className="text-2xl sm:text-3xl">
              FINANCIAL ASSISTANCE
            </Heading>
            <Accent />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field id="fin-name" label="NAME" />
              <Field id="fin-email" label="EMAIL" type="email" />
              <div className="sm:col-span-2">
                <Field id="fin-amount" label="AMOUNT" type="number" />
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Tick type="radio" name="frequency" label="ONE TIME" />
              <Tick type="radio" name="frequency" label="MONTHLY" />
              <Tick type="checkbox" name="anonymous" label="ANONYMOUS" />
              <p className="self-center px-1 text-base italic text-muted">
                small monthly donations are extremely helpful!
              </p>
            </div>
            <button type="button" className={`mt-8 w-full ${buttonClass}`}>
              Check out to pay
            </button>
            <p className="mt-5 text-center text-base text-muted">
              <button
                type="button"
                className="cursor-pointer font-bold text-ink underline underline-offset-4"
              >
                Click Here
              </button>{" "}
              to Cancel Recurring Monthly Donation
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Thank you ---------- */}
      <footer className="border-t border-sun/40 bg-sand text-ink">
        <div
          className={`${container} flex flex-col items-center gap-3 py-20 text-center sm:py-24`}
        >
          <p className="font-serif text-3xl font-bold sm:text-5xl">
            HEY TEAM TAMER – WE COULDN’T DO THIS WITHOUT YOU!
          </p>
          <p className="mt-2 text-xl text-muted">
            Thank you for all the prayers, love, laughs and help
          </p>
          <span aria-hidden className="my-8 block h-px w-24 bg-sun" />
          <p className="max-w-3xl font-serif text-xl italic text-gold sm:text-2xl">
            “ALONE WE CAN DO SO LITTLE, TOGETHER WE CAN DO SO MUCH”
          </p>
          <p className="text-muted">Helen Keller</p>
        </div>
      </footer>
    </main>
    </>
  );
}
