import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { BuildingProduct } from "@/components/sections/building-product";
import { Achievements } from "@/components/sections/achievements";
import { Skills } from "@/components/sections/skills";
import { GithubSection } from "@/components/sections/github";
import { LeetcodeSection } from "@/components/sections/leetcode";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <BuildingProduct />
        <Achievements />
        <Skills />
        <GithubSection />
        <LeetcodeSection />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
