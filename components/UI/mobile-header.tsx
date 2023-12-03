"use client";
import { sections } from "@/static-data";
import Link from "next/link";
import { useState } from "react";
import { FaHamburger, FaWindowClose } from "react-icons/fa";

const MobileHeader = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const openSideBar = () => {
    setShowSideBar(true);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <div className="flex lg:hidden md:hidden bg-dark-fern text-vanilla-cream p-4 justify-between text-sm">
      <h1 className="">Antra Verma</h1>
      <FaHamburger
        className="cursor-pointer text-2xl hover:text-sage-green"
        onClick={openSideBar}
      />

      {showSideBar && (
        <div className="bg-vanilla-cream fixed h-screen w-1/2 flex flex-col top-0 right-0 p-10">
          <FaWindowClose
            className="text-sage-green fixed right-1 top-1 text-xl cursor-pointer"
            onClick={closeSideBar}
          />
          {sections.map((section) => (
            <Link
              href={section.href}
              target='_blank'
              key={section.name}
              className="m-4 text-sage-green  cursor-pointer hover:text-dark-fern"
            >
              {section.name.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
