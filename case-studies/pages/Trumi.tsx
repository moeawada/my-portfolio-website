import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Tag from "../components/Tag";
import FadeInImage from "../components/FadeInImage";
import styles from "./Trumi.module.css";
import content from "../../content/trumi.json";
import {
  iconFileMagnifyingGlass,
  iconWarningCircle,
  iconMagnifyingGlass,
  iconHandArrowUp,
  iconClipboardCheck,
  iconLightbulb,
} from "../data/svgPaths";

import imgEnmax   from "../../assets/76f0998bf47cdb906db55598c4c600e18a2ac8fb.webp";
import imgYYventC from "../../assets/yyventc-discover.webp";

const imageMap: Record<string, string> = {
  enmax:   imgEnmax,
  yyventc: imgYYventC,
};

export default function Trumi() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>{content.hero.title}</h1>
              <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
            </div>
            <div className={styles.heroTags}>
              {content.hero.tags.map((t) => (
                <Tag key={t.label} variant={t.variant as "primary" | "secondary" | "tertiary" | "purple" | "red"}>
                  {t.label}
                </Tag>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meta bar ─────────────────────────────────────── */}
        <section className={styles.metaSection}>
          <div className={styles.metaBar}>
            {content.meta.map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <span className={styles.metaLabel}>{item.label}</span>
                <span className={styles.metaValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Anchor Cards ─────────────────────────────────── */}
        <section className={styles.anchorSection}>
          <div className={styles.anchorGrid}>
            {[
              { label: "Overview",      id: "overview",      icon: iconFileMagnifyingGlass, viewBox: "0 0 44 52"   },
              { label: "The Problem",   id: "the-problem",   icon: iconWarningCircle,       viewBox: "0 0 256 256" },
              { label: "Research",      id: "research",      icon: iconMagnifyingGlass,     viewBox: "0 0 256 256" },
              { label: "Contributions", id: "contributions", icon: iconHandArrowUp,         viewBox: "0 0 60 54"   },
              { label: "Outcome",       id: "outcome",       icon: iconClipboardCheck,      viewBox: "0 0 64 62"   },
              { label: "Reflection",    id: "reflection",    icon: iconLightbulb,           viewBox: "0 0 256 256" },
            ].map((card) => (
              <a
                key={card.label}
                href={`#${card.id}`}
                className={styles.anchorCard}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(card.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className={styles.anchorLabel}>{card.label}</span>
                <svg width="56" height="56" viewBox={card.viewBox} fill="none" aria-hidden="true" className={styles.anchorIcon}>
                  <path d={card.icon} fill="var(--primary)" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Overview ─────────────────────────────────────── */}
        <section id="overview" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.overview.title}</h2>
            <div className={styles.bodyText}>
              {content.overview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── The Problem ──────────────────────────────────── */}
        <section id="the-problem" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.problem.title}</h2>
            <div className={styles.bodyText}>
              {content.problem.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Callout block (Problem) ───────────────────────── */}
        <div className={styles.calloutWrap}>
          <div className={styles.callout}>
            <div className={styles.calloutAccent} />
            <p className={styles.calloutText}>{content.problem.callout}</p>
          </div>
        </div>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Research ─────────────────────────────────────── */}
        <section id="research" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.research.title}</h2>
            <p className={styles.bodyParagraph}>{content.research.intro}</p>
          </div>
        </section>

        {/* Stats bar */}
        <div className={styles.statsWrap}>
          {content.research.stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Post-stats + qualitative paragraphs */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.bodyText}>
              <p>{content.research.postStats}</p>
              <p>{content.research.qualitative}</p>
            </div>
          </div>
        </section>

        {/* ── Callout block (Research) ──────────────────────── */}
        <div className={styles.calloutWrap}>
          <div className={styles.callout}>
            <div className={styles.calloutAccent} />
            <p className={styles.calloutText}>{content.research.callout}</p>
          </div>
        </div>

        {/* Post-callout paragraph */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.bodyParagraph}>{content.research.postCallout}</p>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── My Contributions ─────────────────────────────── */}
        <section id="contributions" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.contributions.title}</h2>
            <div className={styles.contributionBlock}>
              <h3 className={styles.subHeading}>{content.contributions.introHeading}</h3>
              <p className={styles.bodyParagraph}>{content.contributions.intro}</p>
            </div>

            {content.contributions.sections.map((sec) => (
              <div key={sec.heading} className={styles.contributionBlock}>
                <h3 className={styles.subHeading}>{sec.heading}</h3>
                <div className={styles.bodyText}>
                  {sec.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Outcome ──────────────────────────────────────── */}
        <section id="outcome" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.outcome.title}</h2>
            <div className={styles.bodyText}>
              {content.outcome.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Reflection ───────────────────────────────────── */}
        <section id="reflection" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{content.reflection.title}</h2>
            <div className={styles.bodyText}>
              {content.reflection.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.dividerWrap}><Divider /></div>

        {/* ── Check Out These Projects ─────────────────────── */}
        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>Check Out These Projects</h2>
          <div className={styles.relatedGrid}>
            {content.relatedProjects.map((proj) => (
              <Link
                key={proj.slug}
                to={`/my-work/${proj.slug}`}
                className={styles.relatedCard}
              >
                <p className={styles.relatedCardTitle}>{proj.title}</p>
                <div className={styles.relatedCardBody}>
                  <div
                    className={proj.imageType === "square" ? styles.relatedCardImageSquare : styles.relatedCardImage}
                  >
                    <FadeInImage
                      src={imageMap[proj.imageKey]}
                      alt={proj.title}
                      className={proj.imageType === "square" ? styles.relatedCardImgSquare : styles.relatedCardImg}
                    />
                  </div>
                  <p className={styles.relatedCardDesc}>{proj.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
