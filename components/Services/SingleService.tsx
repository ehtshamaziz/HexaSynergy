import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, icon2 } = feature;
  return (
    <div className="service-card group relative flex w-full flex-col items-center border border-[#f2f4ff] bg-primary/[.03] px-10 pb-8 pt-24 text-center shadow-lg transition-all duration-500 hover:shadow-xl dark:border-none dark:bg-[#1D2144] dark:shadow-[#14183a]">
      <div className="absolute -top-[60px] left-1/2 mb-10 flex h-[130px] w-[130px] -translate-x-1/2 items-center justify-center rounded-full border-b border-[#f2f4ff] bg-white dark:border-none dark:bg-black">
        <div className="service-icon flex h-[95px] w-[95px] items-center justify-center rounded-full bg-[#F9FAFF] text-primary shadow transition-all duration-700 dark:bg-[#1D2144]">
          {!icon2 ? (
            icon
          ) : (
            <Image src={icon2} alt="abc" width={60} height={60} className="" />
          )}
        </div>
      </div>
      <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;
