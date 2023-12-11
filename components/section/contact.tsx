import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="my-8 p-4 w-screen flex flex-col align-middle justify-center text-center">
      <h1 className="my-4 text-3xl text-dark-fern font-semibold">Contact Me</h1>
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
    </div>
  );
};

export default ContactSection;
