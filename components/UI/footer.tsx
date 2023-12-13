import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="my-8 p-4 w-screen flex flex-col align-middle justify-center text-center">
      <div className="mt-6 mb-4 flex align-middle justify-center">
        <Link href="https://www.linkedin.com/in/antra-verma/" target="_blank">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/mis-coder" target="_blank">
          <FaGithub />
        </Link>
        <a href="mailto:antraverma99@gmail.com">
          <MdEmail />
        </a>
      </div>
      <p>All Rights Reserved © 2024 </p>
    </div>
  );
};

export default Footer;
