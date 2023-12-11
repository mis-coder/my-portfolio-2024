const AboutMeSection = () => {
  return (
    <div className="p-4 w-screen bg-white flex flex-col align-middle justify-center text-center">
      <h1 className="my-4 text-3xl text-dark-fern font-semibold">About Me</h1>
      <img
        className="mx-auto my-4 h-48 w-48"
        src="images/profile.png"
        alt="profile-pic"
      />
      <h3 className="font-bold text-moss-green text-xl italic">
        "Simplifying Complexity, Code by Code."
      </h3>
      <p className="text-base text-grey-color mt-6">
        Hello! I'm a full-stack web developer with a flair for front-end
        technologies, particularly <b>ReactJS</b>, <b>NextJS</b>, and{" "}
        <b>TypeScript</b>. <br />
        <br />
        My professional journey began with a foundational internship/
        freelancing at Glexpace, followed by a stint in the GirlScript Summer of
        Code, which solidified my skills in these core technologies. As an
        Associate Software Engineer at VT Netzwelt Pvt. Ltd., I further honed my
        expertise, focusing on creating seamless user experiences and robust web
        applications. <br />
        In addition to my corporate role, I ventured into freelancing, tackling
        diverse full-stack projects. This experience not only sharpened my
        technical skills but also deepened my understanding of crafting
        user-friendly and efficient web solutions. <br />
        <br />
        My career is a testament to continuous learning and a passion for
        utilizing technology to solve complex challenges.
      </p>
    </div>
  );
};

export default AboutMeSection;
