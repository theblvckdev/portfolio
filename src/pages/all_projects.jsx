import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import AnimatedCursor from "react-animated-cursor";
import { projects } from "../data/projects_data";
import { MdArrowOutward } from "react-icons/md";

const AllProjects = () => {
  const location = useLocation();

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, [location]);

  return (
    <>
      <main className="h-screen text-gray-300 font-poppins">
        <AnimatedCursor
          showSystemCursor={true}
          innerSize={0}
          outerSize={50}
          color="30, 167, 255"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={"initial"}
          outerStyle={{
            filter: "blur(15px)",
            transform: "scale(10)",
            zIndex: 1,
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <section className="max-w-6xl mx-auto py-16 lg:px-0 md:px-5 px-3">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            ata-aos-easing="ease-in"
          >
            <Link
              to={"/"}
              className="no-underline w-fit group outline-none font-[500] text-base duration-300 ease-in text-blue-300 flex gap-2 items-center"
            >
              <IoArrowBackOutline className="duration-200 ease-in group-hover:-translate-x-2" />
              <div>Nathaniel Joseph</div>
            </Link>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            ata-aos-easing="ease-in"
            className="font-bold xl:text-5xl lg:text-[45px] md:text-5xl text-4xl"
          >
            All Projects
          </h1>

          <div
            className="mt-16"
            data-aos="fade-up"
            data-aos-duration="1000"
            ata-aos-easing="ease-in"
          >
            <div className="grid grid-cols-7 gap-5 items-center pb-3 border-b border-b-gray-300 border-opacity-10">
              <div className="text-white text-base">Year</div>
              <div className="text-white text-base lg:col-span-2 md:col-span-4 text-left">
                Project
              </div>
              <div className="text-white text-base col-span-3 lg:block md:hidden hidden">
                Built with
              </div>
              <div className="text-white text-base md:block hidden">Link</div>
            </div>
            {projects.map((data, index) => {
              const { title, tools, liveUrl, year } = data;

              return (
                <div
                  key={index}
                  className="grid grid-cols-7 gap-5 items-center mt-4 pb-3 border-b border-b-gray-300 border-opacity-10"
                >
                  <div className="text-white text-base">{year}</div>
                  <div className="text-white text-base lg:col-span-1 md:col-span-4 col-span-4 text-left mr-auto w-full">
                    {title}
                  </div>
                  <div className="text-white text-base lg:block md:hidden hidden"></div>
                  <div className="text-white text-base col-span-3 lg:block md:hidden hidden">
                    <div className="flex flex-wrap gap-2 items-center">
                      {tools.map((data, index) => {
                        return (
                          <div
                            key={index}
                            className="py-1.5 px-3 bg-blue-500 bg-opacity-10 text-[12px] xl:text-[12px] lg:text-[8px] rounded-full text-blue-300"
                          >
                            {data}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="text-white text-base">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline w-fit group outline-none font-[500] text-base text-white duration-300 ease-in hover:text-blue-300 flex gap-2 items-center"
                    >
                      <div>Live preview</div>
                      <MdArrowOutward className="duration-300 ease-in group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default AllProjects;
