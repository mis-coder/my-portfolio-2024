import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="my-8 p-4 w-screen flex flex-col align-middle justify-center text-center">
      <div className="mt-6 mb-4 flex align-middle justify-center text-dark-fern text-2xl gap-2">
        <Link className="w-3xl h-3xl p-2  border-2 border-solid border-dark-fern rounded-3xl hover:border-vanilla-cream hover:text-vanilla-cream" href="https://www.linkedin.com/in/antra-verma/" target="_blank">
          <FaLinkedin />
        </Link>
        <Link className="w-3xl h-3xl p-2  border-2 border-solid border-dark-fern rounded-3xl hover:border-vanilla-cream hover:text-vanilla-cream" href="https://github.com/mis-coder" target="_blank">
          <FaGithub />
        </Link>
        <a className="w-3xl h-3xl p-2  border-2 border-solid border-dark-fern rounded-3xl hover:border-vanilla-cream hover:text-vanilla-cream" href="mailto:antraverma99@gmail.com" >
          <MdEmail />
        </a>
      </div>
      <p className="text-moss-green mt-6">All Rights Reserved © 2024 </p>
    </div>
  );
};

export default Footer;
