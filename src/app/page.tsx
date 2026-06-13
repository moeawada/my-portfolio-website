import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import MoeSignature from "@/components/MoeSignature";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Hey There, It&rsquo;s</h1>
        <MoeSignature />
        <p className={styles.heroText}>
          I&rsquo;m a UX and product designer with a deep understanding of systems
          thinking. I help bring clarity and structure to design systems and build
          the shared foundations that keep growing products consistent.
        </p>
      </section>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.projectsSection}>
        <h2 className={styles.mobileHeading}>Discover my work</h2>
        <div className={styles.desktopHeader}>
          <h2 className={styles.desktopHeading}>Discover my work</h2>
          <Button href="/work" variant="quiet" size="lg" icon>
            See All Projects
          </Button>
        </div>

        <div className={styles.grid}>
          <ProjectCard className={styles.cardLarge} />
          <ProjectCard className={styles.cardTopRight} />
          <ProjectCard className={styles.cardBottomRight} />
          <div className={styles.mobileSeeAll}>
            <Button href="/work" variant="quiet" size="lg" icon fullWidth>
              See All Projects
            </Button>
          </div>
          <div className={styles.cardExtraLeft}>
            <ProjectCard />
          </div>
          <div className={styles.cardExtraRight}>
            <ProjectCard />
          </div>
        </div>
      </section>
    </div>
  );
}
