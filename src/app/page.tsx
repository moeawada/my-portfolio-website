import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import MoeSignature from "@/components/MoeSignature";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center gap-10 px-6 pb-10 lg:gap-12 lg:px-16 lg:pb-12">
      <section className="flex w-full flex-col items-center gap-6 lg:gap-12">
        <h1 className="text-center font-heading text-h4 font-bold text-contrast lg:text-h1 lg:font-extrabold">
          Hey There, It&rsquo;s
        </h1>
        <MoeSignature />
        <p className="text-center font-body text-xl font-medium text-contrast lg:px-24 lg:font-heading lg:text-h5">
          I&rsquo;m a UX and product designer with a deep understanding of systems
          thinking. I help bring clarity and structure to design systems and build
          the shared foundations that keep growing products consistent.
        </p>
      </section>

      <div className="w-full py-2">
        <div className="border-t border-primary/30" />
      </div>

      <section className="flex w-full flex-col gap-6">
        <h2 className="text-center font-heading text-h5 font-medium text-white lg:hidden">
          Discover my work
        </h2>
        <div className="hidden flex-col items-start gap-2 lg:flex">
          <h2 className="font-heading text-h2 font-bold text-white">Discover my work</h2>
          <Button href="/work" variant="quiet" size="lg" icon>
            See All Projects
          </Button>
        </div>

        <div className="flex flex-col gap-8 lg:grid lg:h-[924px] lg:grid-cols-7 lg:grid-rows-6 lg:gap-12">
          <ProjectCard className="lg:col-span-4 lg:row-span-4" />
          <ProjectCard className="lg:col-span-3 lg:col-start-5 lg:row-span-2" />
          <ProjectCard className="lg:col-span-3 lg:col-start-5 lg:row-span-4 lg:row-start-3" />
          <div className="lg:hidden">
            <Button href="/work" variant="quiet" size="lg" icon className="w-full">
              See All Projects
            </Button>
          </div>
          <ProjectCard className="hidden lg:col-span-2 lg:row-span-2 lg:row-start-5 lg:flex" />
          <ProjectCard className="hidden lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-5 lg:flex" />
        </div>
      </section>
    </div>
  );
}
