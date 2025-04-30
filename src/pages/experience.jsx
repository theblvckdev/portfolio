import { experiences } from "../data/experience_data";
import { MdArrowOutward } from "react-icons/md";

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
            const { title, company, link, content, duration, tools } = data;

            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                ata-aos-easing="ease-in"
                key={index}
                className="flex lg:flex-row flex-col gap-3 group "
              >
                <div className="text-xs leading-6 basis-1/4">{duration}</div>
                <div className="basis-3/4">
                  <h1 className="text-base group-hover:text-blue-300 duration-300 ease-in text-white">
                    {title} @{" "}
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="outline-none underline"
                    >
                      {company}
                    </a>
                  </h1>

                  <p className="mt-3 text-sm">{content}</p>

                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool, index) => (
                        <span
                          key={index}
                          className="text-xs text-blue-300 bg-blue-300/10 px-3 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
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
            href="https://drive.google.com/file/d/1sVTe2R_p1xW8dP3SBhoIPCTT4mKJ9pZ6/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="w-fit group outline-none text-sm underline text-white duration-300 ease-in hover:text-blue-300 flex gap-2 items-center"
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
