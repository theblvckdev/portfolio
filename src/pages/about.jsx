const AboutSection = () => {
  return (
    <>
      <section
        data-aos="fade-in"
        data-aos-duration="1000"
        ata-aos-easing="ease-in"
        className="text-gray-500"
        id="about"
      >
        <h1 className="text-white font-semibold text-2xl lg:hidden block mb-5">
          About
        </h1>
        <p>
          Back in 2020, I decided to try my hands at creating designs, after
          seeing a friend coding for the first time, I tumbled head first into
          the rabbit hole of coding and web development. Fast-foward to today,
          and I've had the privilege of building amazing softwares that lives in
          the web, I have also been able to share my skills with others on{" "}
          <a
            href="https://twitter.com/theblvckdev"
            className="no-underline font-[500] outline-none text-white duration-300 ease-in hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            twitter
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/nathaniel-joseph-8b172a291/"
            className="no-underline font-[500] outline-none text-white duration-300 ease-in hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
          , and other platforms.
        </p>

        <p className="mt-4">
          My main focus these days is building projects that would help me get
          better at doing what I love. In my free time, I also take up
          challenges on{" "}
          <a
            href="https://www.frontendmentor.io/"
            className="no-underline font-[500] outline-none text-white duration-300 ease-in hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            frontend mentor
          </a>
          , and also participate in coding hackathons.
        </p>

        <p className="mt-4">
          When I’m not at the computer, I’m usually playing soccer or
          basketball, or playing FIFA 23 with firends.
        </p>
      </section>
    </>
  );
};

export default AboutSection;
