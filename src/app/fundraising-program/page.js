import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../_preview-shared/preview-tokens.css";
import "../_preview-shared/premium-preview.css";
import { AnimatedSection } from "../_preview-shared/AnimatedSection";
import PageEffects from "../_preview-shared/PageEffects";
import { premiumFontClass } from "../_preview-shared/premiumFonts";
import communityImage from "./assets/community.webp";

const SCHEDULE_CALL_URL = "https://twogooders.com/fundraising-program/Schedule-a-Call";

// Words of the headline, each rising into place in turn; `accent` words are the gold italic
const headline = [
  ..."Knock your fundraising goal".split(" ").map(word => ({ word })),
  ..."out of the park".split(" ").map(word => ({ word, accent: true })),
];

const ribbon = ["Augment Your Staff", "Be Supported", "Bigger Impact", "Always-On Fundraising"];

const benefits = [
  {
    title: "Augment Your Staff",
    image: "/images/fundraising/AUGMENT YOUR STAFF.webp",
    alt: "Two Gooders Fundraising Team Huddle for Support",
    text: "You will have access to a team at Two Gooders who will work with you to understand your goals and help you exceed them.",
  },
  {
    title: "Be Supported",
    image: "/images/fundraising/BE SUPPORTED.webp",
    alt: "Fundraising planning and strategy support at laptop",
    text: "Two Gooders will provide you with assistance on the following and beyond:",
    list: [
      "Onboarding for your affiliate access to our online gift shop",
      "Marketing resources to drive shoppers to your store",
      "Fundraising strategy and planning",
    ],
  },
  {
    title: "Bigger Impact",
    image: "/images/fundraising/BIGGER IMPACT.webp",
    alt: "Two Gooders Global Impact through Fundraising",
    text: "This always-on fundraising program costs you nothing and can significantly increase your funds raised. This results in a decrease to your overall “Cost To Raise” and increases your ability to do more for less.",
  },
];

const pad = (n) => String(n).padStart(2, "0");

export default function FundraisingPage() {
  return (
    <div className={`${"pm-page"} ${premiumFontClass}`}>
      <PageEffects />

      {/* HERO */}
      <section className={"pm-hero"} aria-labelledby="fundraising-heading" data-glow>
        <div className={"pm-heroCopy"}>
          <p className={"pm-eyebrow"}>Fundraising Program</p>
          <h1 id="fundraising-heading" className={"pm-heroTitle"}>
            {headline.map(({ word, accent }, i) => (
              <React.Fragment key={i}>
                <span className={"pm-word"}>
                  <span className={accent ? "pm-wordAccent" : undefined} style={{ "--i": i }}>{word}</span>
                </span>
                {i < headline.length - 1 ? " " : null}
              </React.Fragment>
            ))}
          </h1>
          <p className={"pm-heroLead"}>
            Are you an organization trying to raise funds? Do you spend exhaustive amounts of time,
            energy &amp; money to reach your fundraising goals? Let our team help you reach it with
            minimal time, effort and without spending a penny!
          </p>
          <div className={"pm-heroActions"}>
            <Link href={SCHEDULE_CALL_URL} className={"pm-btnPrimary"} data-magnetic>Schedule a Call</Link>
            <a href="#benefits" className={"pm-btnOutline"} data-magnetic>How It Works</a>
          </div>
        </div>

        <div className={"pm-heroStage"} data-tilt>
          <div className={"pm-heroMedia"}>
            <Image
              src="/images/fundraising/Fundraising image.jpeg"
              alt="A notebook with the word fundraising sketched on it"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className={"pm-heroImage"}
            />
          </div>
          <div className={"pm-heroBadge"} aria-hidden="true">
            <span className={"pm-heroBadgeDot"} />
            Costs you nothing
          </div>
        </div>
      </section>

      {/* RIBBON — decorative; the phrases appear as real headings below */}
      <div className={"pm-ribbon"} aria-hidden="true">
        <div className={"pm-ribbonTrack"}>
          {[0, 1, 2, 3].map(copy => (
            <span key={copy} className={"pm-ribbonGroup"}>
              {ribbon.map(phrase => (
                <span key={phrase} className={"pm-ribbonItem"}>
                  {phrase}<span className={"pm-ribbonStar"}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* BENEFITS */}
      <section id="benefits" className={"pm-section"} aria-labelledby="benefits-heading" style={{ scrollMarginTop: "var(--header-offset)" }}>
        <AnimatedSection className={"pm-sectionHead"}>
          <p className={"pm-eyebrow"}>Why partner with us</p>
          <h2 id="benefits-heading" className={"pm-sectionTitle"}>
            How our program benefits your organization
          </h2>
        </AnimatedSection>

        <div className={"pm-featureList"}>
          {benefits.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.1}>
              <article className={`${"pm-feature"} ${i % 2 ? "pm-featureReverse" : ""}`}>
                <div className={"pm-featureMedia"} data-parallax>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={"pm-coverImage"}
                  />
                </div>
                <div>
                  <span className={"pm-featureNumber"}>{pad(i + 1)}</span>
                  <h3 className={"pm-featureTitle"}>{item.title}</h3>
                  <p className={"pm-featureText"}>{item.text}</p>
                  {item.list ? (
                    <ul className={"pm-checkList"}>
                      {item.list.map(point => <li key={point}>{point}</li>)}
                    </ul>
                  ) : null}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* HOW MUCH GOOD — teal band */}
      <AnimatedSection className={"pm-band"}>
        <div className={"pm-bandInner"}>
          <div>
            <p className={"pm-eyebrow"}>Your fundraising potential</p>
            <h2 className={"pm-bandTitle"}>
              How much <em>good</em> could you do?
            </h2>
            <p className={"pm-bandText"}>
              Learn more about fundraising potential by scheduling a call or contacting your
              charity account specialist.
            </p>
            <Link href={SCHEDULE_CALL_URL} className={"pm-btnLight"} data-magnetic>Schedule a Call</Link>
          </div>
          <div className={"pm-bandMedia"} data-parallax>
            <Image
              src={communityImage}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={"pm-coverImage"}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* CLOSING CTA */}
      <AnimatedSection className={"pm-closing"}>
        <h2 className={"pm-closingTitle"}>Schedule a call to learn more &amp; get started</h2>
        <p className={"pm-closingText"}>
          Our team will walk you through the program and help you set your fundraising goals.
        </p>
        <div className={"pm-closingActions"}>
          <Link href={SCHEDULE_CALL_URL} className={"pm-btnPrimary"} data-magnetic>Schedule a Call</Link>
          <Link href="https://twogooders.com/charities" className={"pm-btnOutline"} data-magnetic>See Our Charities</Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
