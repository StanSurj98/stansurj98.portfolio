import ContactBlurb from './widgets/ContactBlurb'

const ContactSection = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-between bg-gradient-to-br from-darksteel to-rich-black">
        <ContactBlurb></ContactBlurb>
        {/* <ContactForm></ContactForm> */}
    </section>
  );
}

export default ContactSection