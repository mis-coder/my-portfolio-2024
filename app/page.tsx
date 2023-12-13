import AboutMeSection from "@/components/section/about-me";
import IntroSection from "@/components/section/intro";
import ResumeSection from "@/components/section/resume";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutMeSection />
      <ResumeSection />
    </main>
  );
}
