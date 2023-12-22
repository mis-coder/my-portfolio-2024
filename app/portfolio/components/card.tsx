import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <div className="bg-white w-90 h-auto lg:w-1/3 md:w-1/3 py-8 px-6 rounded-lg shadow-md max-sm:mx-auto gap-2">
      <h1 className="text-lg">{name}</h1>
      <Image
        loading="lazy"
        className="mx-auto my-4 h-auto w-screen"
        src={previewSrc}
        width={48}
        height={48}
        alt="project-preview"
        unoptimized
      />
      <p className="text-sm">{description}</p>
      <div className="flex items-center justify-start text-sm mt-6">
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
