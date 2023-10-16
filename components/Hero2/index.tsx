/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[80vh] w-full bg-cover bg-center bg-no-repeat px-20 lgCustom:h-screen lgCustom:bg-hero-bg"
    >
      <div className="container flex h-full w-full items-center gap-10 lgCustom:justify-center">
        <div className="basis-1/2 lgCustom:basis-auto lgCustom:text-center">
          <p className="mb-3 text-lg font-semibold text-primary xlCustom:text-base lgCustom:text-sm lgCustom:uppercase lgCustom:text-[#8BDDEF]">
            Where Innovation Meets Synergy
          </p>
          <h1 className="mb-5 text-6xl font-bold text-[#191919] dark:text-white 2xlCustom:text-5xl xlCustom:text-4xl lgCustom:text-white">
            Transforming Visions <br /> into Digital Reality
          </h1>
          <p className="mb-6 pr-10 text-lg text-[#999] dark:text-[#ddd] xlCustom:pr-0 xlCustom:text-base lgCustom:text-[#eee]">
            Welcome to Hexa Synergy, where innovation is culture, collaboration
            is strength, and software is an art. Our expert team anticipates
            tomorrow's challenges, crafting solutions for today's demands. Join
            us on a transformative journey.
          </p>
          <div className="flex basis-1/2 gap-4 lgCustom:justify-center">
            <button className="rounded bg-primary px-4 py-2 text-base text-white">
              Get Started
            </button>
            <button className="rounded border border-primary px-4 py-2 text-base text-primary lgCustom:border-0 lgCustom:bg-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center lgCustom:hidden">
          <div className="relative">
            <Image
              src="/images/hero/hero-pic.jpg"
              width={500}
              height={500}
              alt="Hero Image"
              className="h-[26rem] w-[26rem] rounded-full object-cover"
            />
            <div className="absolute -bottom-16 -right-16 -z-10 h-80 w-80 rounded-full border-[28px] border-[#8bddef]">
              &nbsp;
            </div>

            <div className="absolute -top-5 -left-5 -z-10 h-44 w-44 rounded-full bg-[#f7aa76]">
              &nbsp;
            </div>

            <div className="absolute -top-6 -right-6 -z-10 h-10 w-10 rounded-full bg-[#8bddef]">
              &nbsp;
            </div>
            <div className="absolute top-10 -right-12 -z-10 h-14 w-14 rounded-full bg-primary/50">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
