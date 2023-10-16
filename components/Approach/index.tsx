import SectionTitle from "../Common/SectionTitle";
import SingleApproach from "./SingleApproach";
import SingleValue from "./SingleValue";
import { approachData } from "@/data";

const Approach = () => {
  const approachData2 = [...approachData];
  const approachData1 = approachData2.splice(0, 3);

  return (
    <>
      <section
        id="services"
        className="bg-primary/[0.03] py-16 md:py-20 lg:py-28"
      >
        {/* <div className="mx-auto w-full px-2 xs:max-w-[460px] sm:max-w-[575px] md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px]"> */}
        <div className="container">
          <SectionTitle
            title="Our Core Values"
            paragraph="At Hexa Synergy, we innovate, collaborate, and excel. Our ethics, reliability, and sustainability drive transformative solutions for businesses."
            center
            mb="4.4rem"
            approach
          />

          {/* <div className="flex justify-center overflow-hidden xl:flex-col">
            <div className="flex flex-col gap-40 lg:gap-48 xl:ml-3 xl:flex-row xl:justify-start xl:gap-4 2xl:ml-[5.25rem]">
              {approachData1.map((item, index) => (
                <SingleValue
                  key={`homepage-approach-${index}`}
                  approach={item}
                />
              ))}
            </div>

            <div className="mt-[12.6rem] -ml-36 flex flex-col gap-40 xs:-ml-32 xs:mt-[14rem] lg:-ml-40 lg:mt-64 lg:gap-48 xl:-mt-16 xl:mr-3 xl:flex-row xl:justify-end xl:gap-4 2xl:mr-[5.25rem]">
              {approachData2.map((item, index) => (
                <SingleValue
                  key={`homepage-approach-${index}`}
                  approach={item}
                />
              ))}
            </div>
          </div> */}
          <div className="flex flex-wrap justify-center gap-10 overflow-hidden">
            {approachData.map((item, index) => (
              <SingleValue key={`homepage-approach-${index}`} approach={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Approach;
