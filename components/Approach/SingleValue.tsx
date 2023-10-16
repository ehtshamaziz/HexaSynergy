import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleValue = ({ approach }: { approach: Feature }) => {
  const { title, paragraph, icon2, id } = approach;
  return (
    <div className="flex basis-full md:basis-two lg:basis-three flex-col">
      {/* <Image
        src={icon2}
        alt={`${title} Icon`}
        width={65}
        height={65}
        className="mb-2 lg:mb-5"
      /> */}
      <p className="text-[5.5rem] font-light text-primary/10 dark:text-primary/25 -ml-1">0{id}</p>

      <h3 className="mb-4 -mt-2 text-lg font-bold text-black dark:text-white lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="pr-[10px] text-base leading-relaxed text-body-color">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleValue;
