import React from "react";
import Link from "next/link";
import Image from "next/image";
import homeHeroDesktop from "./assets/home-hero-desktop.webp";
import homeWordmark from "./assets/home-wordmark.webp";
import giftGivingImage from "./assets/gift-giving.webp";
import communityImage from "./assets/community.webp";
import fundraisingImage from "./assets/fundraising.webp";
import { AnimatedSection } from "./AnimatedSection";
import { Playfair_Display, Nunito } from "next/font/google";
import "./preview.css";
import "./home-preview.css";
import HomeEffects from "./HomeEffects";

const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"], variable: "--font-playfair-display" });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-nunito" });

export const metadata = {
  title: "Home preview | Two Gooders",
  description: "Preview of the redesigned Two Gooders home page.",
  robots: { index: false, follow: false },
};

const goodThings = [
  { label: "One Gooder", text: "A portion of YOUR purchase goes to YOUR charity" },
  { label: "Two Gooder", text: "A portion of OUR profit goes to charities WE love" },
  { label: "Gifts That Give Back", text: "Many suppliers support their own charities" },
];

const components = [
  {
    title: "Wholesale Suppliers and Artisans",
    text: "We look for quality products that appeal to all audiences. We strive to provide exclusive or unique products you can't find anywhere else; this includes art and handmade products from local artisans. In some cases, they are one of a kind! We ask our suppliers to commit to certain efforts to provide the highest level of standards to support customer service and the best pricing to provide for the highest possible profit to support philanthropic efforts.",
  },
  {
    title: "Charities",
    text: "We ask charities to do a few easy things with the resources we provide to them. In exchange we give them at least half of the profits. We do most of the work; they receive most of the benefit!",
  },
  {
    title: "Shoppers",
    text: "We ask shoppers to turn to Two Gooders as their primary source for gift giving. We may not always be the least expensive or ship the quickest, but we definitely do the most good with the profits from your purchases! The benefits are worth their wait/weight in donations.",
  },
  {
    title: "The Two Gooders Team",
    text: "We pledge to drive company profitability to enable the highest amount of fundraising dollars possible. We add to the fundraising totals with traditional marketing efforts to drive shoppers to our site to purchase gifts on behalf of the charity partners participating in the fundraising program. We operate in a team culture that fosters equality and rewards efforts of kindness, compassion, inclusion, local & global community service and philanthropic endeavors.",
  },
];

const pad = (n) => String(n).padStart(2, "0");

// Words of the headline, each rising into place in turn; `accent` words are the gold italic
const headline = [
  ..."Every purchase does at least".split(" ").map(word => ({ word })),
  ..."two good things".split(" ").map(word => ({ word, accent: true })),
];

// Phrases already used on the site, for the moving ribbon under the hero
const ribbon = ["One Gooder", "Two Gooder", "Gifts That Give Back", "Shop with Purpose"];

export default function HomePage() {
  return (
    <div className={`${"hp-page"} ${playfairDisplay.variable} ${nunito.variable}`} style={{ fontFamily: "var(--font-nunito), system-ui, sans-serif" }}>
      <HomeEffects />
      {/* HERO — server-rendered; the photo is the LCP element and loads with priority */}
      <section className={"hp-hero"} aria-labelledby="hero-heading" data-glow>
        <div className={"hp-heroCopy"}>
          <Image
            src={homeWordmark}
            alt="Two Gooders - The gift shop for do gooders"
            className={"hp-wordmark"}
            sizes="(max-width: 900px) 220px, 280px"
            priority
          />
          <h1 id="hero-heading" className={"hp-heroTitle"}>
            {headline.map(({ word, accent }, i) => (
              <React.Fragment key={i}>
                <span className={"hp-word"}>
                  <span className={accent ? "hp-wordAccent" : undefined} style={{ "--i": i }}>{word}</span>
                </span>
                {i < headline.length - 1 ? " " : null}
              </React.Fragment>
            ))}
          </h1>
          <p className={"hp-heroLead"}>
            Join us in doing some good! Shop for unique gifts where 50% or more of the profit
            goes directly to the charity of your choice.
          </p>
          <div className={"hp-heroActions"}>
            <Link href="https://twogooders.com/shop" className={"hp-btnPrimary"} data-magnetic>Shop for Gifts</Link>
            <Link href="https://twogooders.com/fundraising-program" className={"hp-btnOutline"} data-magnetic>Fundraising Program</Link>
          </div>
          <Link href="https://twogooders.com/suppliers-and-artisans" className={"hp-textLink"}>
            Become a Supplier <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={"hp-heroStage"} data-tilt>
          <div className={"hp-heroMedia"}>
            <Image
              src={homeHeroDesktop}
              alt="A gift wrapped in kraft paper and twine beside a vase of flowers"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className={"hp-heroImage"}
            />
          </div>
          <div className={"hp-heroBadge"} aria-hidden="true">
            <span className={"hp-heroBadgeDot"} />
            Gifts That Give Back
          </div>
        </div>
      </section>

      {/* RIBBON — decorative; the phrases appear as real content elsewhere on the page */}
      <div className={"hp-ribbon"} aria-hidden="true">
        <div className={"hp-ribbonTrack"}>
          {[0, 1, 2, 3].map(copy => (
            <span key={copy} className={"hp-ribbonGroup"}>
              {ribbon.map(phrase => (
                <span key={phrase} className={"hp-ribbonItem"}>
                  {phrase}<span className={"hp-ribbonStar"}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* TWO GOOD THINGS */}
      <AnimatedSection className={"hp-section"} aria-labelledby="good-things-heading">
        <div className={"hp-sectionHead"}>
          <p className={"hp-eyebrow"}>How your gift gives</p>
          <h2 id="good-things-heading" className={"hp-sectionTitle"}>Gifts that give back</h2>
        </div>
        <ol className={"hp-goodGrid"}>
          {goodThings.map((item, i) => (
            <li key={item.label} className={"hp-goodCard"} data-spotlight>
              <span className={"hp-goodNumber"}>{pad(i + 1)}</span>
              <h3 className={"hp-goodLabel"}>{item.label}</h3>
              <p className={"hp-goodText"}>{item.text}</p>
            </li>
          ))}
        </ol>
      </AnimatedSection>

      {/* PURPOSE — editorial pair */}
      <section className={"hp-section"} aria-label="Our purpose">
        <div className={"hp-storyGrid"}>
          <AnimatedSection delay={0.1} className={"hp-storyReveal"}>
           <article className={"hp-storyCard"} data-spotlight>
            <div className={"hp-storyMedia"} data-parallax>
              <Image
                src={giftGivingImage}
                alt="A kraft-wrapped gift tied with twine and greenery"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={"hp-coverImage"}
              />
            </div>
            <div className={"hp-storyBody"}>
              <h2 className={"hp-storyTitle"}>Gift Giving With Purpose</h2>
              <ul className={"hp-checkList"}>
                <li>Your charity needs funds</li>
                <li>Buy unique gifts</li>
                <li>Pick your favorite charity</li>
              </ul>
            </div>
           </article>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className={"hp-storyReveal"}>
           <article className={"hp-storyCard"} data-spotlight>
            <div className={"hp-storyMedia"} data-parallax>
              <Image
                src={communityImage}
                alt="Hands holding a globe"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={"hp-coverImage"}
              />
            </div>
            <div className={"hp-storyBody"}>
              <h2 className={"hp-storyTitle"}>Why We Do It</h2>
              <p className={"hp-storyText"}>Consumerism is here to stay.</p>
              <p className={"hp-storyStatement"}>
                We turn <strong>consumerism</strong> into a force for <strong>good</strong>.
              </p>
            </div>
           </article>
          </AnimatedSection>
        </div>
      </section>

      {/* FORCE FOR GOOD — dark band */}
      <AnimatedSection className={"hp-forceBand"} aria-labelledby="force-heading">
        <div className={"hp-forceInner"}>
          <div className={"hp-forceCopy"}>
            <p className={"hp-eyebrowLight"}>The Force For Good</p>
            <h2 id="force-heading" className={"hp-forceTitle"}>
              <span className={"hp-forceStat"}>50–75%</span>
              <span className={"hp-forceText"}>
                or more of the profit from YOUR purchase goes to YOUR charities.
              </span>
            </h2>
            <Link href="https://twogooders.com/fundraising-program" className={"hp-btnLight"} data-magnetic>
              Explore the Fundraising Program
            </Link>
          </div>
          <div className={"hp-forceMedia"} data-parallax>
            <Image
              src={fundraisingImage}
              alt="A notebook with the word fundraising sketched on it"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={"hp-coverImage"}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* FOUR COMPONENTS */}
      <AnimatedSection className={"hp-section"} aria-labelledby="four-components-heading">
        <div className={"hp-sectionHead"}>
          <p className={"hp-eyebrow"}>How it all works</p>
          <h2 id="four-components-heading" className={"hp-sectionTitle"}>
            Four critical components to doing all this good
          </h2>
        </div>
        <div className={"hp-componentGrid"}>
          {components.map((item, i) => (
            <article key={item.title} className={"hp-componentCard"} data-spotlight>
              <span className={"hp-componentNumber"}>{pad(i + 1)}</span>
              <h3 className={"hp-componentTitle"}>{item.title}</h3>
              <p className={"hp-componentText"}>{item.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      {/* CLOSING CTA */}
      <AnimatedSection className={"hp-closing"} aria-labelledby="join-heading">
        <h2 id="join-heading" className={"hp-closingTitle"}>Join us in doing some good</h2>
        <div className={"hp-closingActions"}>
          <Link href="https://twogooders.com/shop" className={"hp-btnPrimary"} data-magnetic>Shop for Gifts</Link>
          <Link href="https://twogooders.com/suppliers-and-artisans" className={"hp-btnOutline"} data-magnetic>Become a Supplier</Link>
          <Link href="https://twogooders.com/fundraising-program" className={"hp-btnOutline"} data-magnetic>Fundraising Program</Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
