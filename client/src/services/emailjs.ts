import emailjs from "@emailjs/browser";
const keys = require("../config/keys");

const { serviceId, templateId, emailjsKey } = keys;

export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  const templateParams = {
    name,
    email,
    phone: phone || "No phone provided",
    message,
  };

  await emailjs.send(serviceId, templateId, templateParams, emailjsKey).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
};
