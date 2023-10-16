/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full pl-4 pr-4 lg:w-[55%] lg:pr-10 xl:pr-24 mb-16 lg:mb-0">
            <div className="mx-auto mb-14 w-full lg:mx-0">
              <h2 className="mb-4 text-5xl font-bold !leading-tight text-black dark:text-white xlCustom:text-4xl">
                Unveiling the Vision Behind{" "}
                <span className="text-primary">Hexa Synergy</span>
              </h2>
              <p className="text-justify text-base !leading-relaxed text-body-color xl:text-lg">
                At Hexa Synergy, we're more than just a software company We're
                the architects of change, crafting innovative solutions that
                redefine industries. Our commitment to excellence, integrity,
                and collaboration fuels our passion for delivering software that
                empowers businesses to thrive in the digital age.
              </p>
            </div>
            <div className="flex gap-10 smCustom:flex-col">
              <div className="flex flex-1 flex-col items-start">
                <p className="bg-primary py-1 px-2 text-sm uppercase text-white xlCustom:text-xs">
                  Our Resolve in Practice
                </p>
                <h3 className="mt-3 mb-4 text-4xl font-semibold uppercase xlCustom:text-3xl">
                  Our Mission
                </h3>
                <p className="text-justify text-base text-body-color">
                  Hexa Synergy catalyzes transformative innovation in the
                  digital realm, empowering businesses and individuals with
                  cutting-edge software solutions. Our commitment to integrity,
                  collaboration, and excellence drives us to create digital
                  solutions that not only meet but exceed our clients' needs,
                  contributing to a brighter and digitally transformed future.
                </p>
              </div>
              <div className="flex flex-1 flex-col items-start">
                <p className="bg-primary py-1 px-2 text-sm uppercase text-white xlCustom:text-xs">
                  The Future We Imagine
                </p>
                <h3 className="mt-3 mb-4 text-4xl font-semibold uppercase xlCustom:text-3xl">
                  Our Vision
                </h3>
                <p className="text-justify text-base text-body-color">
                  Hexa Synergy envisions global recognition as a leader in
                  software excellence, driving positive change through
                  innovative collaboration. We aspire to create a digital
                  ecosystem where technology fosters thriving businesses and
                  flourishing individuals, marked by integrity, reliability, and
                  sustainability. We shape this future one impactful line of
                  code at a time.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex w-full gap-5 pl-4 pr-4 lg:w-[45%] lg:pl-0 2xl:pl-10 xlCustom:gap-3">
            <Image
              src="/images/about/about-pic3.jpg"
              alt="about-image"
              width={520}
              height={760}
              className="mx-auto w-1/2 rounded-tl-md rounded-bl-md border-primary object-cover"
            />
            <div className="flex flex-col gap-5 xlCustom:gap-3">
              <Image
                src="/images/about/about-pic2.jpg"
                alt="about-image"
                width={440}
                height={380}
                className="flex-1 rounded-tr-md object-cover"
              />
              <Image
                src="/images/about/about-pic1.jpg"
                alt="about-image"
                width={440}
                height={380}
                className="flex-1 rounded-br-md object-cover"
              />
              {/* <Image
                  src="/images/about/about-pic4.jpg"
                  alt="about-image"
                  width={440}
                  height={380}
                  className="flex-1 rounded-br-md object-cover"
                /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
