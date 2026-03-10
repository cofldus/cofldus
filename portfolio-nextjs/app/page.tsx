import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import EducationSection from "@/components/EducationSection";
import PhilosophySection from "@/components/PhilosophySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactSection />
        <SkillsSection />
        <ProjectSection />
        <EducationSection />
        <PhilosophySection />
      </main>
    </>
  );
}
