import Image from "next/image";
import { AnimatedSection } from "../_preview-shared/AnimatedSection";
import BioToggle from "./BioToggle";
import Link from "next/link";
import "../_preview-shared/preview-tokens.css";
import "../_preview-shared/premium-preview.css";
import "./about-preview.css";
import PageEffects from "../_preview-shared/PageEffects";
import { premiumFontClass } from "../_preview-shared/premiumFonts";

// Values from the company culture statement, for the moving ribbon under the hero
const values = ["Kindness", "Compassion", "Inclusion", "Community Service", "Philanthropy"];

export default function About() {

  const techTeamMembers = [
    { name: "Sahil P", cause: "orphanages" },
    { name: "Henim", cause: "fresh, healthy food for homeless shelters" },
    { name: "Bhavik", cause: "cancer cures" },
    { name: "Sahil M", cause: "senior homes" },
    { name: "Nikhil", cause: "Skill Development for Youth" },
    { name: "Shalin", cause: "feeding and educating underprivileged children" },
    { name: "Hetvi", cause: "animal welfare" },
    { name: "Himanshi", cause: "tech school scholarships" },
    { name: "Rajshree", cause: "the environment" },
    { name: "Mansi", cause: "healthcare access in rural areas" },
  ];

  return (
    <div className={`${"pm-page"} ${premiumFontClass} ${"ab-page"}`}>
      <PageEffects />

      {/* HERO */}
      <section className={`${"pm-hero"} ${"ab-storyHero"}`} aria-labelledby="about-heading" data-glow>
        <div className={"ab-storyHeroCopy"}>
          <p className={"pm-eyebrow"}>About Two Gooders</p>
          <h1 id="about-heading" className={`${"pm-heroTitle"} ${"ab-storyTitle"}`}>
            <span className={"pm-word"}><span style={{ "--i": 0 }}>Our</span></span>{" "}
            <span className={"pm-word"}><span className={"pm-wordAccent"} style={{ "--i": 1 }}>Story</span></span>
          </h1>
          <p className={`${"pm-heroLead"} ${"ab-storyLead"}`}>
            Two Gooders was born from a desire to see a gift shop, paired with a
            multifaceted approach to fundraising, that vastly expands the amount
            of good being done in our local and global communities.
          </p>
          <div className={`${"pm-heroActions"} ${"ab-storyActions"}`}>
            <Link href="https://twogooders.com/shop" className={"pm-btnPrimary"} data-magnetic>Shop for Gifts</Link>
            <a href="#team" className={"pm-btnOutline"} data-magnetic>Meet the Team</a>
          </div>
        </div>
      </section>

      {/* RIBBON — decorative */}
      <div className={"pm-ribbon"} aria-hidden="true">
        <div className={"pm-ribbonTrack"}>
          {[0, 1, 2, 3].map(copy => (
            <span key={copy} className={"pm-ribbonGroup"}>
              {values.map(value => (
                <span key={value} className={"pm-ribbonItem"}>
                  {value}<span className={"pm-ribbonStar"}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* MISSION & CULTURE */}
      <section className={"pm-section"} aria-label="Our mission and culture">
        <div className={"pm-featureList"}>
          <AnimatedSection delay={0.1}>
            <article className={"pm-feature"}>
              <div className={"pm-featureMedia"} data-parallax>
                <Image
                  src="/images/about/About us_Our Mission.webp"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  alt="Two Gooders Mission - Why we do it"
                  className={"pm-coverImage"}
                />
              </div>
              <div>
                <p className={"pm-eyebrow"}>Why we exist</p>
                <h2 className={"pm-featureTitle"}>Our Mission</h2>
                <p className={"pm-featureText"}>
                  At Two Gooders, our mission is to drive a societal shift toward
                  beneficial consumerism that transforms gift shopping into a
                  powerful force for good. We believe every purchase should make a
                  positive impact on the world. By supporting multiple charitable
                  causes with each gift given, we create a community of do-gooders
                  joined in a united movement of giving.
                </p>
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className={`${"pm-feature"} ${"pm-featureReverse"}`}>
              <div className={"pm-featureMedia"} data-parallax>
                <Image
                  src="/images/about/Company Culture.webp"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  alt="Two Gooders Company Culture and Diversity"
                  className={"pm-coverImage"}
                />
              </div>
              <div>
                <p className={"pm-eyebrow"}>How we work</p>
                <h2 className={"pm-featureTitle"}>Company Culture</h2>
                <p className={"pm-featureText"}>
                  The company culture at Two Gooders fosters equality and rewards
                  efforts of kindness, compassion, inclusion, community service and
                  philanthropic endeavors. A culture where everyone on the team
                  places a high priority on being and doing good. We treat each
                  other with respect and appreciation regardless of race, ethnicity,
                  gender, lifestyle, age, experience, or title.
                </p>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* TEAM / FOUNDERS */}
      <section id="team" className={"ab-teamSection"} aria-label="Team and founders">
        <div className={"ab-container"}>
          <AnimatedSection delay={0.3} className={"ab-founderBlock"}>
            <div className={"pm-sectionHead"}>
              <p className={"pm-eyebrow"}>Born to give</p>
              <h2 className={"pm-sectionTitle"}>Meet the Founder</h2>
            </div>
            <div className={"ab-founderCard"}>
              <AnimatedSection delay={0.3}>
                <Image
                  src="/images/about/Amy%20Myton.webp"
                  width={1067}
                  height={1600}
                  sizes="(max-width: 900px) 400px, 330px"
                  alt="Amy Myton — Founder and CEO"
                  className={"ab-founderPhoto"}
                />
              </AnimatedSection>

              <AnimatedSection delay={0.3} className={"ab-founderContent"}>
                <h3>“Born to Give”</h3>
                <h4 className={"ab-foundername"}>Amy Myton</h4>
                <h5 className={"ab-founderTitle"}>Founder and CEO</h5>

                <div className={"ab-founderBio"}>
                  <p>
                    Amy Myton is the passionate Founder and CEO of Two Gooders.
                    Known for her energy and generosity, she has cultivated a
                    community that deeply respects her passion for helping
                    others. Her family often says, "Amy was born to give,"
                    highlighting her empathy and compassion, traits she
                    inherited from her grandmother and father.
                  </p>

                  <p>
                    Her giving nature started early. As a child, it was common
                    for Amy to bring home stray animals and at age 14, she
                    started helping people by bringing home a coworker she
                    realized was experiencing homelessness. During these
                    formative years, Amy also developed a love for the ocean,
                    sparking her lifelong commitment to its protection.
                  </p>

                  <p>
                    In her twenties, after the loss of her beloved dog, Amy
                    devoted extensive resources to organizing adoption events,
                    fostering dogs and raising funds for a non-profit Labrador
                    rescue organization. Her focus shifted to helping children
                    after becoming a mom in her thirties. She raised funds for
                    the YMCA after-school program and encouraged her children to
                    ask for charitable donations instead of birthday gifts,
                    instilling a spirit of giving in them.
                  </p>
                  <p>
                    After personally experiencing the challenges fundraisers
                    face, Amy realized she could use her professional experience
                    to create an approach to fundraising that amplifies
                    everyone's ability to give. There was also a deep desire to
                    help drive a societal shift toward beneficial consumerism.
                    Hence, Two Gooders was born to give.{" "}
                  </p>
                  <p>
                    There is a special village working with Two Gooders to raise
                    significant funds to extend the reach of her interests, and
                    so many more. Amy is immensely grateful for her team, the
                    suppliers, the shoppers, and most of all, the charitable
                    organizations doing so much for so many amazing causes.{" "}
                  </p>
                  <p>
                    Two Gooders is the embodiment of Amy's innate desire to
                    give, a legacy that began two generations ago. A legacy she
                    looks to pass to future generations, inspiring them to be
                    "born to give."{" "}
                  </p>

                  <p className={"ab-quote"}>
                    "I invite everyone, in any capacity, to contribute to the
                    collective success of Two Gooders. In doing so, it will
                    become part of the legacy you leave as well."
                    <br />
                    <Image
                        src="/images/about/Amy_sign.webp"
                        width={854}
                        height={640}
                        sizes="80px"
                        alt="Amy Myton signature"
                        className={"ab-signature"}
                      />
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          <div className={"ab-foundingGridBlock"}>
            <AnimatedSection delay={0.3} className={"ab-foundingIntro"}>
              <p className={"pm-eyebrow"}>Amy&apos;s village</p>
              <h2 className={"pm-sectionTitle"}>The Founding Team</h2>
              <p className={"pm-sectionLead"}>
                Amy is grateful to her personal village who contributed in many
                ways to the formation of Two Gooders. She would like to formally
                introduce you to a handful of specific people she affectionately
                refers to as "the founding team". Those who joined in an
                official capacity, sometimes with the only compensation being
                food, love &amp; thanks, working tireless hours to selflessly
                dedicate themselves to the mission.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className={"ab-foundingGrid"}>
              {/* Edward Hurley Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Edward%20Hurley.webp"
                  width={464}
                  height={558}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Edward Hurley - Chief Operating Officer at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Edward Hurley</h2>
                <p className={"ab-profileRole"}>Chief Operating Officer</p>


                {/* <h5 className={"ab-whereHeading"}>
                  WHERE DOES EDWARD WANT TO DO THE MOST GOOD?
                </h5>
                <p className={"ab-whereText"}>
                  He is passionate about nonprofit sustainability, sustainable agriculture, and demonstrating that doing good work and doing good in the world go hand in hand.
                </p> */}
                <BioToggle name="Edward" preview>
                    <p className={"ab-profileText"}>
                      As Chief Operating Officer at Two Gooders, Edward brings more than 13 years of experience in finance, operations, and relationship management, along with a practical belief that a great mission needs a strong foundation behind it. His career has spanned financial services, international operations, nonprofit sustainability, and enterprise account management, giving him experience across a wide range of organizations and operating environments.
                    </p>
                    <p className={"ab-profileText"}>
                      Throughout his career, Edward has managed complex financial operations, streamlined processes, strengthened business relationships, and focused on finding better ways for organizations to operate. He also owned a small family business with his father, adding firsthand entrepreneurial experience and an understanding of the many responsibilities involved in building and running a business.
                    </p>
                    <p className={"ab-profileText"}>
                      Edward’s experience managing finances for a nonprofit dedicated to sustainable agriculture reinforced his belief that a meaningful mission and strong operations must work hand in hand. That perspective is an important part of what he brings to Two Gooders and its commitment to combining commerce with giving.
                    </p>
                    <p className={"ab-profileText"}>
                      As COO, Edward is focused on building the financial and operational foundation that will allow Two Gooders to grow while staying true to its promise of giving back. His work includes creating transparency around charitable contributions, strengthening supplier relationships, and developing systems and processes that support the team and the company’s continued growth. His goal is to help ensure that as Two Gooders expands, its charitable mission remains at the center of how the business operates.
                    </p>
                    <p className={"ab-profileText"}>
                      A Southern California native, Edward enjoys spending time on the golf course and, true to his millennial roots, the occasional video game. He believes the way we choose to spend our time and resources says a great deal about what we value. For Edward, Two Gooders is an opportunity to help build something that demonstrates that doing good work and doing good in the world don’t have to be separate things—and that’s something worth building.
                    </p>
                </BioToggle>
              </article>

              {/* Shalin Jirawala Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Shalin_CTO.webp"
                  width={1254}
                  height={1254}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Shalin Jirawala - Chief Technology Officer (CTO) at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Shalin Jirawala</h2>
                <p className={"ab-profileRole"}>CTO</p>

                <BioToggle
                  name="Shalin"
                  light={true}
                  after={
                    <>

                <h5 className={"ab-whereHeading"}>
                  WHERE DOES SHALIN WANT TO DO THE MOST GOOD?
                </h5>
                <p className={"ab-whereText"}>
                  He is especially passionate about feeding and educating underprivileged children.
                </p>
                    </>
                  }
                >
                    <p className={"ab-profileText"}>
                      Shalin is the Chief Technology Officer at Two Gooders, where he is able to pair his extensive experience in technology with his belief in paying it forward to help those less fortunate, especially children. He recognizes that society has reached a point where purpose-driven commerce is redefining how businesses create impact. Shalin saw the unique structure of Two Gooders as a way to drive maximum impact and was excited to join the executive team. He is confident that the technology he is building will be a key part of creating highly positive disruption in the world of e-commerce.
                    </p>
                    <p className={"ab-profileText"}>
                      With over 15 years of experience leading Ncoresoft Technologies, Shalin has built and scaled high-performing software teams focused on disciplined execution to deliver enterprise-grade solutions across fintech, healthcare, e-commerce, and SaaS. His journey has included working with Fortune 500 organizations such as Deutsche Bank, Infosys, and other global enterprises. He has learned how to create technology focused on driving digital transformation and how to scale it, as well as the critical aspects of security and compliance. His experience positions him well to build a resilient, scalable, automation-first technology backbone for Two Gooders, from marketplace architecture and dropshipping workflows to AI-driven intelligence.
                    </p>
                    <p className={"ab-profileText"}>
                      What excites Shalin most about Two Gooders is its philanthropy-first model.
                    </p>
                    <div className={"ab-quoteBlock"}>
                      <div className={"ab-quoteIcon"}>❝</div>
                      <p className={"ab-quoteText"}>
                        "In a world where fundraising is increasingly difficult, embedding donations directly into commerce is both innovative and sustainable. Technology is the multiplier that makes this mission possible and scalable."
                      </p>
                      <p className={"ab-quoteAuthor"}>– Shalin</p>
                    </div>
                    <p className={"ab-profileText"}>
                      Shalin is looking forward to supporting the two causes he is most passionate about: feeding and educating underprivileged children. He recognizes it must be in that order, as children cannot concentrate on learning if they are hungry. He and his mom are often seen handing out food to hungry children in his hometown of Ahmedabad. His goal is to build a school where local kids can fuel their minds and change their destiny through education.
                    </p>
                </BioToggle>
              </article>

              {/* Julia Lausch Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Julia%20Lausch.webp"
                  width={274}
                  height={366}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Julia Lausch - Program Manager at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Julia Lausch</h2>
                <p className={"ab-profileRole"}>Program Manager</p>


                {/* <h5 className={"ab-whereHeading"}>
                  WHERE DOES JULIA WANT TO DO THE MOST GOOD?
                </h5>
                <p className={"ab-whereText"}>
                  She is especially passionate about children, women, individuals with disabilities, and marginalized communities both in the U.S. and abroad.
                </p> */}
                <BioToggle name="Julia" preview>
                    <p className={"ab-profileText"}>
                      As Program Manager at Two Gooders, Julia Lausch focuses on developing programs and building partnerships that bring together the company, its partners, and the community to create meaningful impact. With more than 24 years of experience in project management, disability services, international education, business development, and community advocacy, Julia has a unique ability to connect people, organizations, and resources around a shared purpose.
                    </p>
                    <p className={"ab-profileText"}>
                      Her passion for helping others began early and has taken her around the world, from humanitarian and educational work in Venezuela, Kosovo, Mexico, India, Kenya, and Sri Lanka to research focused on Filipina migrant women in Dubai. She later coordinated programs at the Wyoming Institute for Disabilities and, with her husband, built successful businesses in Puerto Rico, further strengthening her ability to develop relationships and turn ideas into sustainable programs.
                      Julia is especially passionate about children, women, individuals with disabilities, and marginalized communities both in the U.S. and abroad. Today, she and her husband are raising four young daughters and enjoy spending time at the beach, reading, and traveling. At Two Gooders, Julia is excited to use her diverse experiences to create mutually beneficial programs and partnerships that give more people and organizations the opportunity to come together, participate, and multiply the good they can accomplish.
                    </p>
                </BioToggle>
              </article>

              {/* Ally Quick Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Ally%20Quick.webp"
                  width={414}
                  height={498}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Ally Quick - Chief Human Resources Officer at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Ally Quick</h2>
                <p className={"ab-profileRole"}>Chief Human Resources Officer</p>


                {/* <h5 className={"ab-whereHeading"}>
                  WHERE DOES ALLY WANT TO DO THE MOST GOOD?
                </h5>
                <p className={"ab-whereText"}>
                  She is passionate about supporting newly arrived children, animal welfare, and ocean conservation.
                </p> */}
                <BioToggle name="Ally" preview>
                    <p className={"ab-profileText"}>
                      Ally Quick is the passionate Chief Human Resources Officer at Two Gooders, known for turning chaos into clarity and creating a structure that allows people and organizations to thrive. Born and raised in Germany, Ally brings a global perspective and a personal understanding of what it means to adjust to life in a new country, an experience that shaped her commitment to organizations like ourBRIDGE for KIDS, which helps newly arrived children find belonging.
                    </p>
                    <p className={"ab-profileText"}>
                      Her compassion also extends to animal welfare and ocean conservation, and as a Master Scuba Diver, she has witnessed firsthand both the beauty and fragility of marine life. With a B.S. in Psychology and an HRCI HR Management Certification, Ally combines natural empathy with the expertise to build people-first systems, overseeing recruiting, onboarding, payroll and benefits, compliance, and employee relations at Two Gooders. At the heart of everything she does is a belief that people do their best when they feel valued, connected, and cared for—making Two Gooders and its mission of giving back a natural fit.
                    </p>
                </BioToggle>
              </article>

              {/* Bryan Pruden Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Bryan%20Pruden.webp"
                  width={504}
                  height={504}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Bryan Pruden - Chief Financial Officer at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Bryan Pruden</h2>
                <p className={"ab-profileRole"}>Chief Financial Officer</p>


                {/* <h5 className={"ab-whereHeading"}>
                  WHERE DOES BRYAN WANT TO DO THE MOST GOOD?
                </h5>
                <p className={"ab-whereText"}>
                  He is passionate about serving on community boards, supporting local charitable initiatives, and proving that business and generosity can thrive together.
                </p> */}
                <BioToggle name="Bryan" preview>
                    <p className={"ab-profileText"}>
                      For Bryan, business has always been about more than numbers—it is about using experience, innovation, and sound leadership to build something that creates lasting value. As Chief Financial Officer at Two Gooders, he brings more than 25 years of executive leadership experience to a company whose mission immediately resonated with him. His career has taken him from global organizations including Intel Corporation and SAIC/Leidos to high-growth startups and mid-market companies, where he has served as both Chief Financial Officer and Chief Operating Officer. Along the way, Bryan has built a reputation for turning strategy into action, strengthening operations, and helping organizations grow with purpose and discipline. His experience spans government contracting, health technology, fintech, and other highly regulated industries, giving him a unique perspective on both large, complex enterprises and emerging businesses with the potential to create meaningful change.
                    </p>
                    <p className={"ab-profileText"}>
                      Bryan is especially interested in finding new ways to use existing technologies and innovative thinking to solve long-standing challenges, improve outcomes, and create opportunities for growth. He holds a Bachelor of Business Administration from the University of Mississippi and an MBA with honors from Indiana University and remains actively involved with the CFO Leadership Council, the Private Directors Association, and the Allyship Committee of Athena.
                    </p>
                    <p className={"ab-profileText"}>
                      But Bryan’s commitment to creating an impact extends beyond his professional career. He has served in leadership roles on multiple community boards and was a founding member of a local charitable organization that continues to make a difference in the community today. When Amy shared her vision for Two Gooders, Bryan saw an opportunity to bring together two things he values deeply: building a strong, successful business and using that success to benefit others. As CFO, he is helping create the financial foundation that will allow Two Gooders to grow responsibly while keeping generosity at the heart of its business model. For Bryan, Two Gooders is an opportunity to use decades of experience for something bigger—helping to prove that commerce can create value not only for the people making a purchase, but also for the communities and causes that benefit from it. When business and generosity work together, everyone has the opportunity to become a Gooder.
                    </p>
                </BioToggle>
              </article>

              {/* Denene Freeman Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Denene%20Freeman.webp"
                  width={1145}
                  height={1374}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Denene Freeman - Executive Assistant at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Denene Freeman</h2>
                <p className={"ab-profileRole"}>Executive Assistant</p>


                {/* <h5 className={"ab-whereHeading"}>
                  WHERE DOES DENENE WANT TO DO THE MOST GOOD?
                </h5>
                <p className={"ab-whereText"}>
                  She is especially passionate about ensuring no child is hungry, animal welfare, and teaching the joy of giving.
                </p> */}
                <BioToggle name="Denene" preview>
                    <p className={"ab-profileText"}>
                      Denene Freeman is the Administrative Assistant at Two Gooders, where she helps keep the many moving pieces of a growing e-commerce company organized and moving forward. Supporting day-to-day operations and the leadership team, she assists with customer service, employee onboarding, product sourcing, and special projects, bringing adaptability and a willingness to step in wherever she is needed. Denene draws on more than 35 years as an educator and leader, where she mentored students and colleagues and helped others embrace new technologies and ideas.
                    </p>
                    <p className={"ab-profileText"}>
                      Her commitment to helping others has always extended beyond her professional life, with a special passion for ensuring no child is hungry. She encouraged her students to experience the joy of giving by creating care packages for Family Assistance Ministries (FAM), and her compassion for animals is reflected in her volunteer work with Mission K-9 Rescue. Joining Two Gooders felt like a natural next chapter—an opportunity to bring her experience, heart, and lifelong belief in helping others to a company built around giving back. Denene believes generosity is something we can teach, share, and pass forward, guided by a favorite reminder from Dolly Parton: “If you're lucky enough to have more than you need, then you're lucky enough to give.”
                    </p>
                </BioToggle>
              </article>

              {/* Mark Avery Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Mark%20Avery.webp"
                  width={416}
                  height={554}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Mark Avery - Staff Photographer at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Mark Avery</h2>
                <p className={"ab-profileRole"}>Staff Photographer</p>


                {/* <h5 className={"ab-whereHeading"}>
                  WHERE DOES MARK WANT TO DO THE MOST GOOD?
                </h5>
                <p className={"ab-whereText"}>
                  He particularly admires and supports Médecins Sans Frontières (Doctors Without Borders) for its humanitarian work around the world.
                </p> */}
                <BioToggle name="Mark" preview>
                    <p className={"ab-profileText"}>
                      Mark Avery is an accomplished photojournalist and photo editor whose 40-year career has taken him around the world documenting people, places, and defining moments in history. From his early work with the Associated Press in Beijing, where he covered the 1989 Tiananmen Square student massacre and Mongolia’s first democratic election, to international assignments for the Orange County Register and his current work with ZUMA Press, Mark’s career has given him a unique perspective on people, communities, and our shared humanity.
                    </p>
                    <p className={"ab-profileText"}>
                      Those experiences have also strengthened his belief in compassion, connection, and helping others. He particularly admires and supports Médecins Sans Frontières (Doctors Without Borders) for its humanitarian work around the world. Mark is proud to be part of Two Gooders and a mission that reflects something he deeply believes: when we look beyond ourselves and come together to help others, even everyday choices can make a meaningful difference.
                    </p>
                </BioToggle>
              </article>

              {/* Melissa Gonzales Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Melissa Gonzales.webp"
                  width={457}
                  height={640}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Melissa Gonzales - Charity Partner Account Manager at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Melissa Gonzales</h2>
                <p className={"ab-profileRole"}>Charity Partner Account Manager</p>


                {/* <h5 className={"ab-whereHeading"}>
                  WHERE DOES MELISSA WANT TO DO THE MOST GOOD?
                </h5>
                <p className={"ab-whereText"}>
                  She is especially passionate about helping children with disabilities and supporting individuals and families affected by addiction.
                </p> */}
                <BioToggle name="Melissa" preview>
                    <p className={"ab-profileText"}>
                      Melissa brings 33 years of experience marketing building materials to the architectural community, where much of her career has been centered around building relationships and connecting people. She is excited to bring that same spirit of connection and compassion to Two Gooders.
                    </p>
                    <p className={"ab-profileText"}>
                      Giving back has always held a special place in Melissa’s heart; over the years, she has supported Childhelp and has become especially passionate about helping children with disabilities and supporting individuals and families affected by addiction. She believes everyone deserves compassion, understanding, and a second chance. Melissa is grateful for the opportunity to work alongside the many wonderful charities supported by Two Gooders and hopes to help make a meaningful difference in the lives of those who need it most. For her, being part of Two Gooders is about more than giving—it’s about caring, showing up, and helping create a better future for others.
                    </p>
                </BioToggle>
              </article>

              {/* Lisa Liddi Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Lisa Liddi.webp"
                  width={1145}
                  height={1374}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Lisa Liddi - Senior Buyer at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Lisa Liddi</h2>
                <p className={"ab-profileRole"}>Senior Buyer</p>


                {/* <h5 className={"ab-whereHeading"}>
                  WHERE DOES LISA WANT TO DO THE MOST GOOD?
                </h5>
                <p className={"ab-whereText"}>
                  She quietly gives her time to support hospice and memory care patients, animal welfare, and local community outreach.
                </p> */}
                <BioToggle name="Lisa" preview>
                    <p className={"ab-profileText"}>
                      As Senior Buyer, Lisa Liddi has a natural gift for finding the beautiful, unexpected, and the things that simply make you smile. A lifelong animal lover—especially when it comes to pugs—and a true admirer of art, craftsmanship, and thoughtful design, Lisa loves discovering unique gifts, artisan treasures, and special pieces that feel personal rather than ordinary. For her, the best gifts are the ones that make you stop and think, “This is so them.”
                    </p>
                    <p className={"ab-profileText"}>
                      Giving back is just as much a part of who Lisa is; she has a generous heart and quietly gives her time to support hospice and memory care patients, as well as local outreach and community efforts, believing that even small acts of kindness can make a meaningful difference. Lisa also believes in the power of one good idea—and in what can happen when people come together around it. That is what makes Two Gooders so special to her: the opportunity to discover something wonderful, bring joy to someone’s life, and, at the same time, do some good in the world.
                    </p>
                </BioToggle>
              </article>

              {/* Nikishia Garrett Card */}
              {/* <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Nikishia.webp"
                  width={1086}
                  height={1448}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Nikishia Garrett - Art Director at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Nikishia Garrett</h2>
                <p className={"ab-profileRole"}>Art Director</p>

                <div className={showNikishiaBio ? "ab-bioFull" : "ab-bioPreview"}>
                    <p className={"ab-profileText"}>
                      As Art Director at Two Gooders, Nikishia brings together her love of art, design, storytelling, and creative entrepreneurship. She believes creativity is more than making something beautiful—it is about telling stories, honoring culture, and creating something that makes people feel. For seven years, Nikishia has built her creative business, developing brands, products, and visual stories rooted in authenticity and craftsmanship.
                    </p>
                    <p className={"ab-profileText"}>
                      Her creative journey has also taken her into education, fashion design, science, and small-scale urban farming—experiences that have taught her to embrace curiosity, transformation, and growth. Passionate about supporting independent artists, local makers, creative entrepreneurs, and communities where people have the opportunity to build something of their own, Nikishia believes talent should never be limited by a lack of access or opportunity. That belief is what makes Two Gooders so meaningful to her. She is excited to use her creativity to celebrate the stories behind the artists and products we feature and to be part of a company where discovering something special can also help create something good.
                    </p>
                </div> */}

                {/* <h5 className={"ab-whereHeading"}>
                  WHERE DOES NIKISHIA WANT TO DO THE MOST GOOD?
                </h5> */}
                {/* <p className={"ab-whereText"}>
                  She is passionate about supporting independent artists, local makers, creative entrepreneurs, and ensuring talent is never limited by lack of access or opportunity.
                </p> */}
                {/* <button
                  className={"ab-viewBioBtnLight"}
                  onClick={() => setShowNikishiaBio(!showNikishiaBio)}
                >
                  {showNikishiaBio ? "Hide bio" : "Meet Nikishia"}
                </button>
              </article> */}

              {/* Zach Bauer Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Zach Bauer.webp"
                  width={1086}
                  height={1448}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Zach Bauer - Information Technology Director at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Zach Bauer</h2>
                <p className={"ab-profileRole"}>Information Technology Director</p>


                {/* <h5 className={"ab-whereHeading"}>
                  WHERE DOES ZACH WANT TO DO THE MOST GOOD?
                </h5>
                <p className={"ab-whereText"}>
                  He is passionate about education, mentorship, and empowering people through access to knowledge and technology.
                </p> */}
                <BioToggle name="Zach" preview>
                    <p className={"ab-profileText"}>
                      As IT Director at Two Gooders, Zach Bauer brings together his passion for technology, problem-solving, and helping people succeed. With experience spanning IT leadership, cybersecurity, cloud technologies, systems administration, and digital transformation, Zach believes the best technology should work quietly behind the scenes—simplifying processes, connecting people, and giving them the tools they need to do their best work.
                    </p>
                    <p className={"ab-profileText"}>
                      A natural bridge between technical and non-technical teams, he values patience, communication, and understanding people just as much as finding the right technical solution. Zach is also passionate about education and mentorship and believes access to knowledge and technology can open doors and create meaningful opportunities for others. What makes Two Gooders especially meaningful to him is the opportunity to use his experience in service of something bigger—building a secure, reliable technology foundation that helps the team stay focused on its mission. For Zach, technology isn't just about systems and software; it's about empowering people and helping an organization built on giving back make an even greater impact.
                    </p>
                </BioToggle>
              </article>

              {/* Anita Ballan Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Anita%20Ballan.webp"
                  width={1145}
                  height={1374}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Anita Ballan - Finance Director at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Anita Ballan</h2>
                <p className={"ab-profileRole"}>Finance Director</p>


                <BioToggle name="Anita" preview>
                    <p className={"ab-profileText"}>
                      Anita Ballan is the Financial Controller at Two Gooders, where she brings 20 years of accounting and financial leadership experience to a role that combines her professional expertise with a greater sense of purpose. A member of AICPA, she holds an MBA from the University of East London and a BA in Accounting. Having worked with start-ups, high-growth, SaaS, and mission-driven diverse organizations across Singapore, the UK, and the US, Anita brings extensive experience in US and international financial and management reporting, internal controls, process improvement, and operational efficiency. She enjoys creating strong, streamlined financial processes that bring clarity to complex information and help organizations make confident decisions and build for the future.
                    </p>
                    <p className={"ab-profileText"}>
                      What drew Anita to Two Gooders was the opportunity to use her experience for something bigger than financial success alone. She loves being part of a company where growth creates more opportunities to give back and where everyday purchases can make a meaningful difference for causes and communities in need. Outside of work, Anita enjoys traveling and discovering new cultures, getting lost in a good book, listening to music, and watching movies. With a background in choir and a lifelong love of singing, music holds a special place in her heart. Anita believes turning gift-giving into a force for good means extending the joy of one thoughtful gesture far beyond the person receiving it. For her, Two Gooders represents the beautiful idea that giving can bring people together, support meaningful causes, and turn even the simplest gift into an opportunity to create positive change.
                    </p>
                </BioToggle>
              </article>

              {/* Audra Bright Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Audra%20Bright.webp"
                  width={228}
                  height={306}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Audra Bright - Director of Legal Operations at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Audra Bright</h2>
                <p className={"ab-profileRole"}>Director of Legal Operations</p>


                <BioToggle name="Audra" preview>
                    <p className={"ab-profileText"}>
                      Audra Bright is the Director of Legal Operations at Two Gooders, where she helps build the agreements, policies, and procedures that keep the company running smoothly and provide a strong foundation for continued growth. Audra began her career in healthcare as the Practice Manager of a rural medical clinic, overseeing daily operations and compliance, before finding her calling in the nonprofit sector. Through her work with organizations with a global reach, she has helped develop the legal and operational infrastructure needed to support teams, partnerships, and programs across countries. With a Paralegal Certificate and a Master’s in Human Resources Management, Audra brings a unique perspective to the intersection of legal operations, people, and organizational systems. She believes the strongest organizations are built when the structures supporting people are created thoughtfully and with purpose.
                    </p>
                    <p className={"ab-profileText"}>
                      What drew Audra to Two Gooders was its belief that giving back isn’t simply part of the business—it is the heart of it. Outside of work, Audra lives in Arizona with her husband and their 9-year-old son, whom she lovingly describes as a true steward of the earth and quite the chatterbox. Together, they enjoy traveling, discovering new experiences, and binge-watching their favorite shows, while Audra also loves reading and crafting. She believes generosity becomes especially powerful when people can choose where their impact goes. For Audra, Two Gooders makes that possible by transforming everyday gift-giving into an opportunity to support communities, strengthen meaningful causes, and make each purchase part of something bigger.
                    </p>
                </BioToggle>
              </article>

              {/* Joshua Thomas Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Joshua.png"
                  width={193}
                  height={334}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Joshua Thomas - Warehouse Director at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Joshua Thomas</h2>
                <p className={"ab-profileRole"}>Warehouse Director</p>


                <BioToggle name="Joshua" preview>
                    <p className={"ab-profileText"}>
                      Joshua Thomas is the Warehouse Director at Two Gooders, where he brings more than 30 years of customer service experience and a genuine passion for helping others. In his role, Joshua helps keep warehouse operations organized and running smoothly while supporting the team with the kindness, respect, and cooperation that has guided him throughout his career. He believes that how we treat one another matters and that even the smallest act of kindness can create a ripple effect that reaches far beyond the moment.
                    </p>
                    <p className={"ab-profileText"}>
                      For Joshua, giving back is more than something he does—it is a philosophy he strives to live by every day. He believes that true fulfillment comes through loving service to others and that when we choose to do good, that goodness has a way of continuing forward. This belief is what makes Two Gooders and its mission especially meaningful to him. Joshua loves the idea that one simple action can serve two purposes: bringing happiness to someone while also helping another person or community in need. He describes it as “feeding two birds with one scone”—using one act of kindness to create twice the good. For Joshua, being part of Two Gooders is an opportunity to put that belief into action, helping create a culture where generosity, compassion, and service can inspire others and make a lasting difference.
                    </p>
                </BioToggle>
              </article>

              {/* Keohen Smith Card */}
              <article className={"ab-teamCard"} data-spotlight>
                <Image
                  src="/images/about/Keohen.png"
                  width={216}
                  height={324}
                  sizes="(max-width: 900px) 280px, 280px"
                  alt="Keohen Smith - Project Manager at Two Gooders"
                  className={"ab-profileImage"}
                />
                <h2 className={"ab-profileName"}>Keohen Smith</h2>
                <p className={"ab-profileRole"}>Project Manager</p>


                <BioToggle name="Keohen" preview>
                    <p className={"ab-profileText"}>
                      Keohen Smith is the Project Manager at Two Gooders, where he brings a unique blend of creativity, experience, and enthusiasm for bringing people and ideas together. Born and raised in Laguna Beach, Keohen has followed a wonderfully diverse career path, from music production and more than 20 years in live television production to hospitality and real estate. Whether working behind the scenes on a television production or bringing his community together as the founder of the Laguna Beach Golf Cart Club, Keohen has always had a passion for connecting people, creating memorable experiences, and turning ideas into reality. His adventurous spirit, collaborative nature, and ability to make things happen bring a special energy to the Two Gooders team.
                    </p>
                    <p className={"ab-profileText"}>
                      Outside of work, Keohen&apos;s interests are just as colorful as his career. A licensed helicopter pilot and Le Cordon Bleu culinary graduate, he loves cooking, entertaining, and bringing people together. Whether organizing a parade, planning an event, or embracing a new adventure, Keohen finds joy in creating experiences that make others smile. What drew him to Two Gooders was the opportunity to combine his creativity and love of community with a mission centered on kindness and generosity. He believes life is richer when we look out for one another and that even the simplest gesture can create a ripple effect of goodness. For Keohen, turning gift-giving into a force for good means spreading joy, strengthening communities, and making someone&apos;s day a little brighter—and having a little fun along the way!
                    </p>
                </BioToggle>
              </article>
            </AnimatedSection>

            {/* Tech Team Section */}
            <AnimatedSection delay={0.3} className={"ab-techSection"}>
              <div className={"pm-sectionHead"}>
                <p className={"pm-eyebrow"}>Building the platform</p>
                <h2 className={"pm-sectionTitle"}>The tech team, led by Shalin</h2>
              </div>
              <Image
                src="/images/about/Ncoreteam.webp"
                width={1600}
                height={1032}
                sizes="(max-width: 1400px) 100vw, 1400px"
                alt="Two Gooders Tech Team led by CTO Shalin Jirawala"
                style={{ maxHeight: '600px', width: '100%', objectFit: 'contain', display: 'block', margin: '0 auto', paddingBottom: "20px" }}
              />
              <div className={"ab-techTeamDetails"}>
                The Two Gooders technology team in India, led by Shalin, is an exceptionally bright and talented group of young professionals who have contributed many innovative ideas and thoughtful solutions to build the complex platform powering the Two Gooders store, fundraising program, and supplier marketplace. Their technical skill and collaborative problem-solving have been instrumental in developing a system capable of supporting the many moving parts of purpose-driven commerce. Just as importantly, the team has embraced the Two Gooders culture of doing good, showing a genuine dedication to the mission behind the platform they are helping to build. Despite the geographic distance from the U.S. corporate office, they truly value the emphasis on personal connection and in-person engagement, strengthening the shared vision that drives Two Gooders forward.
              </div>
              <div className={"ab-techTeamList"}>
                Pictured from left to right: <br />
                <div className={"ab-marqueeSection"}>
                  <div className={"ab-marqueeContent"}>
                    {[...techTeamMembers, ...techTeamMembers].map((member, idx) => (
                      <span key={idx} className={"ab-marqueeItem"}>
                        <strong className={"ab-memberName"}>{member.name}</strong>
                        <span className={"ab-memberCause"}> – {member.cause}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>


            {/* Intern Team */}
            <AnimatedSection delay={0.3} className={"ab-internSection"}>
              <AnimatedSection delay={0.3}>
                <p className={`${"pm-eyebrow"} ${"ab-internEyebrow"}`}>The next generation</p>
                <h2 className={"ab-sectionSubtitle"}>The Intern Team</h2>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className={"ab-sectionIntro"}>
                  With Amy's son being on summer leave from the University of
                  Oregon, a mutually beneficial opportunity presented itself and
                  the Two Gooders internship program was born. Meet some of the
                  future's best and brightest humans who joined the team with
                  passion and tenacity after learning about the mission...
                </p>
              </AnimatedSection>

              <div className={"ab-internGrid"}>
                {/* Cooper Myton */}
                <article className={"ab-internCard"} data-spotlight>
                  <Image
                    src="/images/about/Cooper Myton.jpg"
                    width={533}
                    height={800}
                    sizes="(max-width: 900px) 280px, 280px"
                    alt="Cooper Myton - Technical Specialist & Business Strategist at Two Gooders"
                    className={"ab-profileImage"}
                  />

                  <h2 className={"ab-profileName"}>Cooper Myton</h2>
                  <p className={"ab-profileRole"}>
                    Technical Specialist & Business Strategist
                  </p>

                  <BioToggle
                    name="Cooper"
                    light={false}
                    after={
                      <>

                  <h5 className={"ab-whereHeading"}>
                    WHERE DOES COOPER WANT TO DO THE MOST GOOD?
                  </h5>
                  <p className={"ab-whereText"}>
                    He is especially passionate about helping children and
                    preserving our planet.
                  </p>
                      </>
                    }
                  >
                      <p className={"ab-profileText"}>
                        Cooper is proud to be a Duck at the University of Oregon,
                        where he is pursuing a master's degree in Computer Science &
                        Mathematics and a minor in Spanish. He is immersed in the
                        world of technology in his classes and everyday life. His
                        role at Two Gooders supports the company's IT needs, the
                        development of the website & store, as well as input into
                        company strategy.
                      </p>

                      <p className={"ab-profileText"}>
                        Through sports, including his role as the President of the
                        UO men's club volleyball team, Cooper has learned valuable
                        skills in leadership, business, fundraising and successfully
                        contributing to a team. As confirmed by many people who
                        witnessed Cooper's journey from childhood to now, he is
                        known for his hysterical, sarcastic sense of humor, a deep
                        level of compassion and his desire to always do the right
                        thing.
                      </p>

                      <div className={"ab-quoteBlock"}>
                        <div className={"ab-quoteIcon"}>❝</div>
                        <p className={"ab-quoteText"}>
                          "I have always felt uneasy seeing so many people in need
                          and not being able to do much to help them. It is a
                          terrible feeling. When I was young and seeing vast
                          homelessness for the first time, I told my mom how sad it
                          made me and asked what we could do to help the people. She
                          said we would help as many people as we could, but there
                          was only so much we could do as one family. It is very
                          fulfilling to be part of Two Gooders, a much bigger family
                          that can help so much more."
                        </p>
                        <p className={"ab-quoteAuthor"}>– Cooper</p>
                      </div>
                  </BioToggle>
                </article>

                {/* Sean Hoffmeister */}
                <article className={"ab-internCard"} data-spotlight>
                  <Image
                    src="/images/about/Sean Hoffmeister.webp"
                    width={613}
                    height={768}
                    sizes="(max-width: 900px) 280px, 280px"
                    alt="Sean Hoffmeister - Technical Specialist & Business Strategist at Two Gooders"
                    className={"ab-profileImage"}
                  />

                  <h2 className={"ab-profileName"}>Sean Hoffmeister</h2>
                  <p className={"ab-profileRole"}>
                    Technical Specialist & Business Strategist
                  </p>

                  <BioToggle
                    name="Sean"
                    light={false}
                    after={
                      <>

                  <h5 className={"ab-whereHeading"}>
                    WHERE DOES SEAN WANT TO DO THE MOST GOOD?
                  </h5>
                  <p className={"ab-whereText"}>
                    As an avid surfer catching waves all over the world, Sean is
                    passionate about protecting our oceans.
                  </p>
                      </>
                    }
                  >
                      <p className={"ab-profileText"}>
                        Sean has enjoyed his time at UCLA where he is pursuing a
                        master's degree in Computer Science. He has a wide range of
                        experience and interests that allow him to contribute in
                        many ways at Two Gooders. Sean's previous internships took
                        him into the world of IT and website and application design.
                        His experience in business strategy through a management
                        tech-breadth course led him to recognizing his love of
                        business. As the social coordinator of his UCLA men's club
                        volleyball team, Sean has also delved into marketing aspects
                        around social media.
                      </p>

                      <div className={"ab-quoteBlock"}>
                        <div className={"ab-quoteIcon"}>❝</div>
                        <p className={"ab-quoteText"}>
                          "I have always wanted to find a way to bridge my career
                          with the ability to give back and create something to make
                          the world a better place. I am grateful to be part of the
                          team at Two Gooders to fulfill that goal. I enjoy
                          contributing to changing gift shopping to an experience
                          customers can feel good about, rather than contributing to
                          the greed commonly found in large corporations."
                        </p>
                        <p className={"ab-quoteAuthor"}>– Sean</p>
                      </div>
                  </BioToggle>
                </article>

                {/* Kolbe Fink */}
                <article className={"ab-internCard"} data-spotlight>
                  <Image
                    src="/images/about/Kolbe Fink.webp"
                    width={1372}
                    height={1600}
                    sizes="(max-width: 900px) 280px, 280px"
                    alt="Kolbe Fink - Marketing Specialist at Two Gooders"
                    className={"ab-profileImage"}
                  />

                  <h2 className={"ab-profileName"}>Kolbe Fink</h2>
                  <p className={"ab-profileRole"}>Marketing Specialist</p>

                  <BioToggle
                    name="Kolbe"
                    light={false}
                    after={
                      <>

                  <h5 className={"ab-whereHeading"}>
                    WHERE DOES KOLBE WANT TO DO THE MOST GOOD?
                  </h5>
                  <p className={"ab-whereText"}>
                    She is passionate about helping less fortunate children and
                    families living the fullest lives they possibly can.
                  </p>
                      </>
                    }
                  >
                      <p className={"ab-profileText"}>
                        Kolbe joined the team in her senior year at UCLA and has
                        since earned a degree in Economics, with a minor in Film.
                        Kolbe spent extensive time with the UCLA Athletics marketing
                        team, where she honed her graphic design skills—an
                        experience that significantly contributes to her work at Two
                        Gooders.
                      </p>

                      <p className={"ab-profileText"}>
                        Her passion for creative marketing drives her career
                        ambitions and she's eager to pursue a path combining her
                        analytical background with her artistic interests. Kolbe is
                        known for her integrity, drive, and strong time management
                        skills, consistently handling multiple tasks efficiently and
                        effectively. She is thrilled to join a company that gives
                        back to those in need and to work alongside a team that
                        shares her passion for making a positive impact.
                      </p>

                      <div className={"ab-quoteBlock"}>
                        <div className={"ab-quoteIcon"}>❝</div>
                        <p className={"ab-quoteText"}>
                          "Athletics have been a vital part of my life, shaping who
                          I am and opening doors for me and those around me. I truly
                          believe I wouldn't be where I am today without the
                          opportunities I was given at a young age. That's why I'm
                          so passionate about supporting nonprofit organizations
                          that focus on youth sports. I want to help ensure young
                          children can experience the same joy and growth I did.
                          Being part of the team at Two Gooders allows me to do the
                          work I love knowing it supports causes that help more kids
                          experience youth sports."
                        </p>
                        <p className={"ab-quoteAuthor"}>– Kolbe</p>
                      </div>
                  </BioToggle>
                </article>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


    </div>
  );
}
