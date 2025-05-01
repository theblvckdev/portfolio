import { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = lazy(() => import("./home"));
const AllProjects = lazy(() => import("./pages/all_projects"));

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
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
          }
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/archive" element={<AllProjects />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
