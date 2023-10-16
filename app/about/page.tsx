// import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectinTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Crafting Tomorrow's Digital Landscape"
        description="Explore the story, values, and mission that define Hexa Synergy — a leading force in crafting innovative software solutions."
        link="About"
      />
      <AboutSectionTwo />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
