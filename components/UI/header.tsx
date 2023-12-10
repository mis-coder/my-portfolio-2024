import { sections } from "@/static-data";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-screen hidden lg:flex md:flex  bg-dark-fern text-vanilla-cream p-4 justify-between">
      <h1 className="">Antra Verma</h1>
      <div>
        {sections.map((section) => (
          <Link
            href={section.href}
            key={section.name}
            target="_blank"
            className="m-2 cursor-pointer hover:text-sage-green"
          >
            {section.name.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
