import Link from "next/link";

const IntroSection = () => {
  return (
    <div className="p-4 h-screen w-screen bg-vanilla-cream flex flex-col align-middle justify-center text-center">
      <h1 className="text-3xl lg:text-5xl md:text-5xl text-sage-green leading-normal">
        Hello, my name is Antra Verma. I am a {""}
        <span className="text-dark-fern font-semibold">
          full stack developer
        </span>
        .
      </h1>
      <Link
        href="/portfolio"
        target="_blank"
        className="relative px-6 py-3 font-bold text-vanilla-cream group  mx-auto my-16"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-sage-green group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-dark-fern"></span>
        <span className="relative tracking-wider"> View Portfolio</span>
      </Link>
    </div>
  );
};

export default IntroSection;
