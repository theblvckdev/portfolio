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
        <p className="text-sm">
          In 2021, I embarked on my journey as a software developer after being
          inspired by witnessing a colleague's programming work. This sparked my
          passion for coding and web development, leading me to fully immerse
          myself in the field. Today, I have had the privilege of developing
          sophisticated web applications and solutions, while also sharing my
          expertise with others on{" "}
          <a
            href="https://twitter.com/iamnathan_dev"
            className="underline outline-none text-white duration-300 ease-in hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            twitter
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/iamnathan-dev/"
            className="underline outline-none text-white duration-300 ease-in hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
          , and other platforms.
        </p>

        <p className="mt-4 text-sm">
          Currently, my primary focus is on developing innovative projects that
          enhance my technical expertise and problem-solving abilities. During
          my spare time, I actively engage in coding challenges, and participate
          in competitive programming hackathons to further expand my skills and
          knowledge.
        </p>
        <p className="mt-4 text-sm">
          When I’m not at the computer, I’m usually playing soccer or
          basketball, or playing FIFA 23 with firends.
        </p>
      </section>
    </>
  );
};

export default AboutSection;
