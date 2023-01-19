import React, { useState, useRef } from "react";
// import ButtonMain from "../../MainWidgets/ButtonMain";
// import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [state, setState] = useState({
    visitorName: "",
    visitorEmail: "",
    visitorMessage: "",
  });

  const form = useRef();

  // ---- EmailJS ----
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xm360sn",
        "contact_form", // Email template - for this, RECEIVING emails
        form.current,
        "zoeIdqJwRBTB8oHhy"
      )
      .then((result) => {
        console.log(`EmailJS SUCCESS! `, result.text);
      })
      .catch((error) => {
        console.log(`EmailJS FAILED... `, error.text);
      });

    setState({
      ...state,
      visitorName: "",
      visitorEmail: "",
      visitorMessage: "",
    });
  };

  // ---- Form Handlers ----
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const inputName = target.name;
    // ES6 'spread' and 'computed property name' syntax updates multiple states at once
    setState({ ...state, [inputName]: value });
  };

  return (
    <div className="flex h-full w-1/2 flex-col items-center justify-center px-28 py-12">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-h-full w-full max-w-full"
      >
        <div className="font-regular mb-10 font-robotoCondensed text-lg text-white">
          <label htmlFor="visitorName">NAME</label>
          <br />
          <input
            className="mt-2 w-full rounded-md border-2 border-lightest-darksteel bg-light-darksteel p-2"
            name="visitorName"
            type={"text"}
            required
            value={state.visitorName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="font-regular mb-10 font-robotoCondensed text-lg text-white">
          <label htmlFor="visitorEmail">EMAIL</label>
          <br />
          <input
            className="mt-2 w-full rounded-md border-2 border-lightest-darksteel bg-light-darksteel p-2"
            name="visitorEmail"
            type={"email"}
            required
            value={state.visitorEmail}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="font-regular mb-10 font-robotoCondensed text-lg text-white">
          <label htmlFor="visitorMessage">MESSAGE</label>
          <br />
          <textarea
            className="mt-2 h-24 max-h-48 w-full rounded-md border-2 border-lightest-darksteel bg-light-darksteel p-2"
            name="visitorMessage"
            type={"text"}
            required
            value={state.visitorMessage}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="mb-10">
          <ButtonMain onClick={(e) => sendEmail(e)}>Email Me!</ButtonMain>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

/*

TODO:

1. Email validation, no empty fields
  a. what to do if they send an empty field? maybe pop up an error indicator
2. Email success
  a. hide main form component and show a success message instead?
  b. something along the lines of "Thanks for reaching out, I'll get back to you soon!"?

*/
