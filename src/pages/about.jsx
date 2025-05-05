const AboutSection = () => {
  return (
    <>
      <section
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        className="text-gray-500"
        id="about"
        aria-labelledby="about-heading"
      >
        <h1
          id="about-heading"
          className="text-white font-semibold text-2xl lg:hidden block mb-5"
        >
          About
        </h1>
        <p className="text-sm">
          As a driven software developer since 2021, I've consistently led and
          delivered high-impact web solutions that solve complex business
          challenges. My journey began when I recognized the transformative
          power of programming, and I've since established myself as a technical
          leader in web development. Through my expertise in building
          sophisticated applications and mentoring others, I've created lasting
          value while actively sharing my knowledge on{" "}
          <a
            href="https://twitter.com/iamnathan_dev"
            className="underline outline-none text-white duration-300 ease-in hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow me on Twitter"
          >
            twitter
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/iamnathan-dev/"
            className="underline outline-none text-white duration-300 ease-in hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
            aria-label="Connect with me on LinkedIn"
          >
            linkedin
          </a>
          , and other platforms.
        </p>

        <p className="mt-4 text-sm">
          As a value-driven developer, I consistently deliver innovative
          solutions that drive business impact and exceed client expectations.
          My proven track record includes successfully architecting and
          implementing complex features that significantly improve user
          experience and system performance. I thrive on taking ownership of
          challenging projects and delivering measurable results through my
          technical expertise and strategic problem-solving approach.
        </p>
        <p className="mt-4 text-sm">
          Beyond coding, I enjoy staying active through soccer and basketball,
          and engaging in friendly FIFA matches - maintaining a healthy
          work-life balance while nurturing my competitive spirit.{" "}
        </p>
      </section>
    </>
  );
};

export default AboutSection;
