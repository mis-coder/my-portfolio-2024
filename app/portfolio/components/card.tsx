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
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <Image
        className="mx-auto my-4 h-48 w-48"
        src={previewSrc}
        width={48}
        height={48}
        alt="project-preview"
        unoptimized
      />
      <div>
        <Link href={codeUrl} target="_blank">
          View Source Code
        </Link>
        <Link href={liveUrl} target="_blank">
          View Live App
        </Link>
      </div>
    </div>
  );
};

export default Card;
