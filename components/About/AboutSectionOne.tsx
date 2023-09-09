import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {

  return (
    <section id="about" className="bg-primary/[.03] pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className=" pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Unveiling the Vision Behind HexaSynergy"
                paragraph="At HexaSynergy, we're more than just a software company. We're the architects of change, crafting innovative solutions that redefine industries. Our commitment to excellence, integrity, and collaboration fuels our passion for delivering software that empowers businesses to thrive in the digital age."
                mb="44px"
                width="600px"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <Image
                src="/images/about/team2.png"
                alt="about-image"
                width={600}
                height={500}
                className="mx-auto h-auto w-full max-w-full lg:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
