import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleApproach = ({ approach }: { approach: Feature }) => {
  const { title, paragraph, icon2 } = approach;
  return (
    // <div className="approach-box group relative flex h-[15.4rem] w-[15.4rem] flex-col items-center justify-center bg-primary/[.05] px-4 pb-4 pt-4 text-center transition-all duration-500 dark:border-none dark:bg-[#1D2144] xs:h-72 xs:w-72 xs:px-8 xs:pb-8 lg:h-80 lg:w-80 xl:h-80 xl:w-80 2xl:h-[21rem] 2xl:w-[21rem] 2xl:pt-8 2xl:pb-14">
    //   <Image
    //     src={icon2}
    //     alt={`${title} Icon`}
    //     width={65}
    //     height={65}
    //     className="mb-2 lg:mb-5"
    //   />

    //   <h3 className="mb-2 text-base font-bold text-black dark:text-white xs:text-lg sm:text-2xl lg:mb-2 lg:text-lg xl:text-2xl">
    //     {title}
    //   </h3>
    //   <p className="pr-[10px] text-xs font-medium leading-relaxed text-body-color lg:text-sm">
    //     {paragraph}
    //   </p>
    // </div>
    <div className="approach-box w-[15.4rem group relative h-[15.4rem] text-center xs:h-72 xs:w-72 lg:h-80 lg:w-80 xl:h-80 xl:w-80 2xl:h-[21rem] 2xl:w-[21rem]">
      <div className="approach-box-side p-4 approach-box-side--front absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-primary/10 transition-all duration-1000 ease-in-out">
        <Image
          src={icon2}
          alt={`${title} Icon`}
          width={75}
          height={75}
          className="mb-2 lg:mb-5"
        />

        <h3 className="mb-2 text-base text-black dark:text-white xs:text-lg sm:text-2xl lg:mb-2 lg:text-2xl">
          {title}
        </h3>
      </div>
      <div className="approach-box-side p-8 approach-box-side--back absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out">
        <p className="pr-[10px] text-sm font-medium leading-relaxed text-white md:text-base">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleApproach;
