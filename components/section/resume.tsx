import Link from "next/link";
import { CgSoftwareDownload } from "react-icons/cg";
import { MdOutlineContentPasteSearch } from "react-icons/md";

const ResumeSection = () => {
  return (
    <div className="my-8 p-4 w-screen bg-sage-green flex flex-col align-middle justify-center text-center">
      <h1 className="my-4 text-3xl text-vanilla-cream font-semibold">Resume</h1>
      <div className="mt-6 mb-4 flex align-middle justify-center">
        <Link
          href="assets/antra-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-moss-green text-base justify-center h-12 w-56 rounded-3xl bg-vanilla-cream mr-2 hover:bg-dark-fern hover:text-vanilla-cream"
        >
          <MdOutlineContentPasteSearch className="text-lg mr-2" />
          View Resume
        </Link>
        <a
          href="assets/antra-resume.pdf"
          className="flex items-center text-moss-green text-base justify-center h-12 w-56 rounded-3xl bg-vanilla-cream hover:bg-dark-fern hover:text-vanilla-cream"
          download={"AntraVermaResume.pdf"}
        >
          <CgSoftwareDownload className="text-lg mr-2" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeSection;
