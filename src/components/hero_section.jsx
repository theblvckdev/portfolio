import React, { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoUpwork } from "react-icons/bi";

const HeroComponent = () => {
  const [activeSection, setActiveSection] = useState("");

  const linksToSections = [
    {
      name: "About",
      path: "#about",
      active: activeSection === "about",
    },
    {
      name: "Experience",
      path: "#experience",
      active: activeSection === "experience",
    },
    {
      name: "Projects",
      path: "#projects",
      active: activeSection === "projects",
    },
  ];

  const socialLinks = [
    {
      icon: <IoLogoGithub size={28} />,
      path: "https://github.com/iamnathan-dev",
    },
    {
      icon: <IoLogoInstagram size={28} />,
      path: "https://www.instagram.com/iamnathan.dev/",
    },
    { icon: <BsTwitterX size={28} />, path: "https://x.com/iamnathan_dev" },
    {
      icon: <IoLogoLinkedin size={28} />,
      path: "https://www.linkedin.com/in/iamnathan-dev/",
    },
    {
      icon: <BiLogoUpwork size={35} />,
      path: "https://www.upwork.com/freelancers/~01eef3ccc7348ee8f4?mp_source=share",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="h-full lg:fixed relative top-0 bottom-0 md:py-24 md:pb-16 pt-16 lg:w-[40%]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          ata-aos-easing="ease-in"
        >
          <h1 className="font-bold xl:text-5xl lg:text-[45px] md:text-5xl text-4xl">
            Nathaniel Joseph
          </h1>
          <h3 className="md:text-2xl text-[25px] font-semibold lg:mt-2">
            Frontend Developer
          </h3>
          <p className="mt-3 xl:max-w-[60%] xl:w-full lg:w-[80%] md:w-[50%] w-full text-gray-400 font-light text-base">
            I build pixel-perfect, functional, and scalable web applications.
          </p>

          <div className="mt-20 lg:block hidden">
            <div className="flex flex-col">
              {linksToSections.map((data, index) => {
                const { name, path, active } = data;

                return (
                  <a
                    key={index}
                    href={path}
                    className="no-underline outline-none w-fit"
                  >
                    <div className="flex items-center gap-3 uppercase text-sm group py-2">
                      <div
                        className={`border-b border-b-gray-600 group-hover:w-[60px] duration-300 ease-in group-hover:border-b-white ${
                          active ? "w-[60px] border-b-white" : "w-[35px]"
                        }`}
                      ></div>
                      <div
                        className={`group-hover:text-white duration-300 ease-in ${
                          active ? "text-white" : "text-gray-500"
                        }`}
                      >
                        {name}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:mt-20 mt-10">
            <div className="flex gap-4 items-center">
              {socialLinks.map((data, index) => {
                const { icon, path } = data;

                return (
                  <a
                    className="text-gray-600 text-2xl duration-300 ease-in hover:text-white"
                    key={index}
                    href={path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
