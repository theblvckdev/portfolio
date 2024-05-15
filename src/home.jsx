import React, { useEffect } from "react";
import HeroComponent from "./components/hero_section";
import AboutSection from "./pages/about";
import ExperienceSection from "./pages/experience";
import ProjectsSection from "./pages/projects";
import ContactSection from "./pages/contact";
import AnimatedCursor from "react-animated-cursor";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, [location]);

  return (
    <>
      <main className="h-screen font-poppins text-gray-300">
        <section className="max-w-[67rem] xl:w-full lg:w-[85%] w-[90%] mx-auto">
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
          <HeroComponent />

          <div className="xl:ml-[50%] lg:ml-[53%] lg:py-24 py-16 h-full">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
