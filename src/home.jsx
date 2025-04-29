import React, { useEffect, useState } from "react";
import HeroComponent from "./components/hero_section";
import AboutSection from "./pages/about";
import ExperienceSection from "./pages/experience";
import ProjectsSection from "./pages/projects";
import ContactSection from "./pages/contact";
import AnimatedCursor from "react-animated-cursor";
import { useLocation } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      window.scrollTo(0, 0);
    };
  }, [location]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#0a192f]">
        <div className="w-64 h-64">
          <DotLottieReact
            src="https://lottie.host/6f7f4a2a-efe5-4e84-9614-4ed2962fa57d/ESDnuBpeA8.lottie"
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  }

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
