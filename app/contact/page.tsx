import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Connect with Hexa Synergy"
        description="Get in touch with us. Whether you have questions, ideas, or opportunities, we're here to listen and collaborate. Reach out and let's transform possibilities into realities."
        link="Support"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
