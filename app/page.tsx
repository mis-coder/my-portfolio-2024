import AboutMeSection from "@/components/section/about-me";
import ContactSection from "@/components/section/contact";
import IntroSection from "@/components/section/intro";
import PortfolioSection from "@/components/section/portfolio";
import ResumeSection from "@/components/section/resume";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <PortfolioSection />
      <AboutMeSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
