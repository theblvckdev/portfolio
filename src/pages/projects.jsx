import { MdArrowOutward } from "react-icons/md";
import { projects } from "../data/projects_data";

const ProjectsSection = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        className="xl:mt-24 mt-20 text-gray-500"
        id="projects"
        aria-label="Projects Section"
      >
        <h2 className="text-white font-semibold text-2xl lg:hidden block mb-5">
          Projects
        </h2>

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
                aria-label={`Visit ${title} project`}
              >
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                  className="flex lg:flex-row flex-col-reverse transition-all !duration-300 !ease-in-out gap-5 lg:p-4 rounded-md bg-transparent lg:hover:bg-gray-500 lg:hover:ring-1 lg:hover:ring-gray-700 lg:hover:backdrop-blur-xl lg:hover:bg-opacity-20 lg:hover:shadow-md"
                  role="article"
                >
                  <div className="basis-3/4">
                    <h3 className="text-base flex gap-1 items-center group-hover:text-blue-300 transition-colors duration-300 ease-in-out underline text-white">
                      {title}{" "}
                      <MdArrowOutward
                        className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </h3>

                    <p className="mt-3 text-sm">{content}</p>

                    <div
                      className="mt-5 flex flex-wrap gap-2 items-center"
                      role="list"
                      aria-label="Technologies used"
                    >
                      {tools.map((data, index) => {
                        return (
                          <div
                            key={index}
                            className="py-1.5 px-3 bg-blue-500 bg-opacity-10 text-xs rounded-full text-blue-300"
                            role="listitem"
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
