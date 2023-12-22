import { projects } from "@/static-data";
import Card from "./components/card";

export default function PortfolioPage() {
  return (
    <div className="h-screen w-screen flex flex-wrap items-start pt-8 justify-center bg-vanilla-cream text-dark-fern text-6xl font-bold">
      {projects.map((project, index) => {
        return <Card key={index} {...project} />;
      })}
    </div>
  );
}
