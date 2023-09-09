import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import { servicesData } from "@/data";

const Services = () => {
  return (
    <>
      <section id="services" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="HexaSynergy offers a diverse range of software solutions tailored to your business needs. We prioritize innovation and excellence, crafting digital experiences that empower growth and success."
            center
          />

          <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((feature) => (
              <SingleService key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
