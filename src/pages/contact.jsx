const ContactSection = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        className="xl:mt-24 mt-20 text-gray-500"
        id="experience"
        aria-labelledby="contact-heading"
      >
        <h1
          id="contact-heading"
          className="text-white font-semibold text-2xl lg:hidden block mb-5"
        >
          Contact
        </h1>

        <p className="lg:mt-0 mt-3 text-sm">
          I'm currently open to new opportunities and collaborations. Whether
          you'd like to discuss a project, explore potential partnerships, or
          simply connect, I welcome your message at:{" "}
          <a
            href="mailto:nathancodes05@gmail.com"
            className="no-underline outline-none text-blue-300 font-[500]"
            aria-label="Email me at nathancodes05@gmail.com"
          >
            nathancodes05@gmail.com
          </a>
        </p>
      </section>
    </>
  );
};

export default ContactSection;
