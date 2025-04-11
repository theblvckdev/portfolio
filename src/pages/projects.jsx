import { MdArrowOutward } from "react-icons/md";
import { projects } from "../data/projects_data";

const ProjectsSection = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        ata-aos-easing="ease-in"
        className="xl:mt-24 mt-20 text-gray-500"
        id="projects"
      >
        <h1 className="text-white font-semibold text-2xl lg:hidden block mb-5">
          Projects
        </h1>

        <div className="flex lg:space-y-4 space-y-8 flex-col">
          {projects.map((data, index) => {
            const { title, content, liveUrl, tools } = data;

            return (
              <a
                href={liveUrl}
                key={index}
                className="no-underline outline-none group"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  ata-aos-easing="ease-in"
                  className="flex lg:flex-row flex-col-reverse transition-all !duration-300 !ease-in-out gap-5 lg:p-4 rounded-md bg-transparent hover:bg-gray-500 hover:ring-1 hover:ring-gray-700 hover:backdrop-blur-xl hover:bg-opacity-20 hover:shadow-md"
                >
                  <div className="basis-3/4">
                    <h1 className="text-base flex gap-1 items-center group-hover:text-blue-300 transition-colors duration-300 ease-in-out underline text-white">
                      {title}{" "}
                      <MdArrowOutward className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </h1>

                    <p className="mt-3 text-sm">{content}</p>

                    <div className="mt-5 flex flex-wrap gap-2 items-center">
                      {tools.map((data, index) => {
                        return (
                          <div
                            key={index}
                            className="py-1.5 px-3 bg-blue-500 bg-opacity-10 text-xs rounded-full text-blue-300"
                          >
                            {data}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
