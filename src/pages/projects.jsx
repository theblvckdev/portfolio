import { MdArrowOutward } from "react-icons/md";
import { projects } from "../data/projects_data"

const ProjectsSection = () => {
  return (
    <>
      <section data-aos="fade-up"
        data-aos-duration="1000"
        ata-aos-easing="ease-in" className="xl:mt-24 mt-20 text-gray-500" id="projects">
        <h1 className="text-white font-semibold text-2xl lg:hidden block mb-5">
          Projects
        </h1>

        <div className="flex lg:space-y-4 space-y-8 flex-col">
          {projects.map((data, index) => {
            const { title, thumbnail, content, liveUrl, tools } = data;

            return (
              <a href={liveUrl} key={index} className="no-underline outline-none group" target="_blank" rel="noreferrer">
                <div data-aos="fade-up"
                  data-aos-duration="1000"
                  ata-aos-easing="ease-in" className="flex lg:flex-row flex-col-reverse duration-300 ease-in gap-5 lg:p-4 rounded-md lg:hover:bg-gray-500 lg:hover:ring-1 lg:hover:ring-gray-700 lg:hover:backdrop-blur-xl lg:hover:bg-opacity-20 lg:hover:shadow-md">
                  <div className="h-[70px] w-[130px] basis-1/4 ring-2 ring-gray-700 rounded-md overflow-hidden">
                    <img src={thumbnail} width={'100%'} className="object-fill h-[70px]" alt={title} />
                  </div>

                  <div className="basis-3/4">
                    <h1 className="text-[16px] flex gap-1 items-center group-hover:text-blue-300 duration-300 ease-in font-semibold text-white">
                      {title} <MdArrowOutward className="duration-300 ease-in group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </h1>

                    <p className="mt-3 text-sm">
                      {content}
                    </p>

                    <div className="mt-5 flex gap-2 items-center">
                      {tools.map((data, index) => {
                        return (
                          <div key={index} className="py-1.5 px-3 bg-blue-500 bg-opacity-10 text-[12px] xl:text-[12px] lg:text-[8px] rounded-full text-blue-300">
                            {data}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ProjectsSection
