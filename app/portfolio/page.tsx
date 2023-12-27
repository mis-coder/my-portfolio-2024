import { projects } from "@/static-data";
import Card from "./components/card";

export default function PortfolioPage() {
  return (
    <div className="h-auto w-screen flex flex-wrap items-start py-4 justify-center bg-vanilla-cream text-dark-fern text-6xl font-bold gap-5">
      {projects.map((project, index) => {
        return <Card key={index} {...project} />;
      })}
    </div>
  );
}
