import ContactBlurb from "./widgets/ContactBlurb";

const ContactSection = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-darksteel to-rich-black px-10 py-8 lg:flex lg:justify-between">
      <ContactBlurb></ContactBlurb>
      {/* <ContactForm></ContactForm> */}
    </section>
  );
};

export default ContactSection;
