import Link from "next/link";

type ProjectCardProps = {
  className?: string;
};

export default function ProjectCard({ className = "" }: ProjectCardProps) {
  return (
    <Link
      href="/work"
      className={`flex w-full flex-col overflow-hidden rounded-3xl ${className}`}
    >
      <div className="h-[184px] w-full bg-placeholder lg:h-auto lg:min-h-0 lg:flex-1" />
      <div className="h-[92px] w-full shrink-0 bg-brand-100 lg:h-[100px]" />
    </Link>
  );
}
