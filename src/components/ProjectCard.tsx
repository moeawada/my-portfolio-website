import Link from "next/link";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  className?: string;
};

export default function ProjectCard({ className = "" }: ProjectCardProps) {
  return (
    <Link href="/work" className={`${styles.card} ${className}`}>
      <div className={styles.image} />
      <div className={styles.caption} />
    </Link>
  );
}
