import emailjs from "@emailjs/browser";

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

  await emailjs
    .send(
      "service_784y7ve",
      "template_61aph43",
      templateParams,
      "LQV0njcnqS4hUqoWI"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};
