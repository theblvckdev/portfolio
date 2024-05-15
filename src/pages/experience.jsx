import { experiences } from "../data/experience_data";
import { MdArrowOutward } from "react-icons/md";
import resume from "../assets/pdf/Resume.pdf";

const ExperienceSection = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        ata-aos-easing="ease-in"
        className="xl:mt-24 mt-20 text-gray-500"
        id="experience"
      >
        <h1 className="text-white font-semibold text-2xl lg:hidden block mb-5">
          Experience
        </h1>
        <div className="flex flex-col space-y-5 gap-3">
          {experiences.map((data, index) => {
            const { title, company, content, duration, tools } = data;

            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                ata-aos-easing="ease-in"
                key={index}
                className="flex lg:flex-row flex-col gap-3 group "
              >
                <div className="text-[12px] leading-6 basis-1/4 uppercase">
                  {duration}
                </div>
                <div className="basis-3/4">
                  <h1 className="text-[16px] group-hover:text-blue-300 duration-300 ease-in font-semibold text-white">
                    {title} @ {company}
                  </h1>

                  <p className="mt-3 text-sm">{content}</p>

                  <div className="mt-5 flex flex-wrap gap-2 items-center">
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
              </div>
            );
          })}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          ata-aos-easing="ease-in"
          className="mt-8"
        >
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="no-underline w-fit group outline-none font-[500] text-base text-white duration-300 ease-in hover:text-blue-300 flex gap-2 items-center"
          >
            <div>View Full Résumé</div>
            <MdArrowOutward className="duration-300 ease-in group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
