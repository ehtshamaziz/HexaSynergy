import React from "react";
import { clientData } from "@/data";
import Counter from "../Common/Counter";

const Achievements = () => {
  return (
    <section className="bg-primary/[0.03] py-14 md:py-16 lg:py-24">
      <div className="container flex flex-col items-center text-center">
        <p className="mb-2 text-lg mdCustom:text-base font-semibold uppercase text-primary">
          Our Achievements
        </p>
        <h2 className="mb-4 w-[38rem] text-center text-[40px] font-bold text-[#191919] dark:text-white mdCustom:max-w-[30rem] mdCustom:w-full mdCustom:text-3xl">
          Over <span className="text-primary">52+</span> Successful Projects
          Delivered and Counting{" "}
        </h2>
        <div className="mt-16 mdCustom:mt-8 flex w-full items-start justify-between gap-10 px-16 lgCustom:px-0 mdCustom:flex-col mdCustom:items-center">
          {clientData &&
            typeof clientData == "object" &&
            clientData.map((item, index) => (
              <Counter key={index} work={item} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
