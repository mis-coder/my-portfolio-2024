"use client";

import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";

interface CardProps {
  name: string;
  description: string;
  codeUrl: string;
  liveUrl: string;
  previewSrc: string;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  codeUrl,
  liveUrl,
  previewSrc,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const _onMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    setHovered(true);
  };

  const _onMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    setHovered(false);
  };

  return (
    <div className="bg-white w-11/12 h-96 lg:w-1/3 md:w-1/3 py-8 px-6 rounded-lg shadow-md max-sm:mx-auto">
      <h1 className="text-lg">{name}</h1>
      <div
        className="relative w-auto h-auto"
        onMouseEnter={_onMouseEnter}
        onMouseLeave={_onMouseLeave}
      >
        {hovered ? (
          <div className="mx-auto my-4 h-48 w-auto rounded-lg cursor-pointer bg-moss-green text-sm text-vanilla-cream flex items-center justify-center p-6 bg-opacity-90 scale-75 transition duration-500 transform hover:scale-100">
            {description}
          </div>
        ) : (
          <Image
            className="mx-auto my-4 h-48 w-screen rounded-lg cursor-pointer"
            src={previewSrc}
            width={500}
            height={250}
            alt="project-preview"
            quality={80}
          />
        )}
      </div>
      <div className="flex items-center justify-center text-sm mt-6">
        <Link
          href={liveUrl}
          target="_blank"
          className="flex items-center  justify-center h-12 w-40 rounded-lg 
          mr-2 bg-moss-green text-vanilla-cream
        hover:bg-dark-fern"
        >
          View Live App
        </Link>
        <Link
          href={codeUrl}
          target="_blank"
          className="flex items-center   justify-center h-12 w-40 rounded-lg border-2 border-dark-fern bg-white mr-2 hover:bg-dark-fern hover:text-vanilla-cream"
        >
          View Source Code
        </Link>
      </div>
    </div>
  );
};

export default Card;
