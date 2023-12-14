import Image from "next/image";

const AboutMeSection = () => {
  return (
    <div
      id="about-me"
      className="p-4 w-screen bg-white flex flex-col align-middle justify-center text-center"
    >
      <h1 className="my-4 text-3xl text-dark-fern font-semibold">About Me</h1>
      <Image
        className="mx-auto my-4 h-48 w-48"
        src="/images/profile.png"
        width={48}
        height={48}
        alt="profile-pic"
        unoptimized
      />
      <h3 className="font-bold text-moss-green text-xl italic">
        &quot; Simplifying the Complexity. &quot;
      </h3>
      <p className="px-10 text-base text-grey-color mt-6 md:text-justify lg:text-justify md:px-20 lg:px-20">
        Hi, I&apos;m Antra, a Full Stack Developer with a deep-rooted passion
        for building and innovating. In the ever-evolving landscape of web
        development, I find joy in turning intricate challenges into elegant,
        user-friendly solutions. <br />
        <br /> What drives me?
        <br /> A relentless pursuit of knowledge and an innate ability to
        rapidly absorb and apply new skills. I specialize in Web Application
        Development, constantly expanding my technical toolkit to stay at the
        forefront of the industry.
        <br />
        <br /> Beyond my technical prowess, I pride myself on my ability to
        communicate complex ideas, weave compelling narratives, manage time
        effectively, and collaborate seamlessly within teams. These soft skills
        not only complement my technical abilities but also enable me to bring
        holistic perspectives to the projects I undertake.
        <br />
        <br /> I&apos;m also an enthusiast for all things organized – from my
        wardrobe to my workflow, I believe that order is the first step towards
        efficiency. This love for organization extends to my personal life,
        where I find solace in the tranquility of nature and the simple pleasure
        of a cup of tea, especially one made by my mother.
        <br />
        <br /> In my quest to create, I blend the precision of coding with the
        artistry of design, ensuring that every project is not just functional
        but also aesthetically pleasing.
        <br />
        <br /> Feel free to connect with me as I continue to explore, build, and
        share insights in the world of web development and beyond. Let&apos;s
        inspire and be inspired!
      </p>
    </div>
  );
};

export default AboutMeSection;
