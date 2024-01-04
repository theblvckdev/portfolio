import React from "react";
import ButtonWidget from "../utils/button";
import ScrollDonwWidget from "../utils/scroll_down_btn";

const HeroComponent = () => {
  return (
    <>
      <section className="h-screen xl:px-0 px-5 flex items-center relative">
        <div data-aos="fade-up"
          data-aos-duration="1000"
          ata-aos-easing="ease-in">
          <h1 className="text-indigo-500 font-semibold lg:text-4xl md:text-3xl text-2xl">
            Nathaniel Joseph
          </h1>
          <h3 className="lg:text-7xl md:text-6xl text-6xl text-white font-bold">Frontend Developer</h3>
          <p className="mt-3 lg:max-w-[53%] md:max-w-[63%] text-gray-400 md:text-lg text-base">
            I build pixel-perfect, accessible products for the web and beyond.
          </p>
          <div className="mt-5 flex gap-5 items-center">
            <ButtonWidget
              outline={false}
              title={'Say hello!'}
            />

            <ButtonWidget
              outline={true}
              title={'Download resume'}
            />
          </div>
        </div>
        <ScrollDonwWidget />
      </section>
    </>
  );
};

export default HeroComponent;
