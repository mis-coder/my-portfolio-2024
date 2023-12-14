"use client";
import { sections } from "@/static-data";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className="w-screen hidden lg:flex md:flex  bg-dark-fern text-vanilla-cream p-4 justify-between">
      <Link href="/">Antra Verma</Link>
      <div>
        {sections.map((section) => (
          <Link
            href={section.href}
            key={section.name}
            target={section.target}
            className={`${
              pathName === section.href
                ? "m-2 cursor-pointer hover:text-sage-green underline"
                : "m-2 cursor-pointer hover:text-sage-green"
            }`}
          >
            {section.name.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
