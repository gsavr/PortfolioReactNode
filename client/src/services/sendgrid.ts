const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

sgMail.setApiKey(keys.sendGridKey);

export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  const msg = {
    to: "giorgiosavron@me.com",
    from: "gio.dev0831@gmail.com",
    subject: "MESSAGE FROM PORTFOLIO",
    text: "Giorgio Savron Portfolio",
    html: `
  <html>
    <body>
      <div style="text-align: left;">
      <p style="font-size: 34px;">New Message from your Portfolio</p>
      <p style="font-size: 30px;">Name: ${name}</p>
      <p style="font-size: 30px;">Email: ${email}</p>
      <p style="font-size: 30px;">Phone: ${phone || "No phone provided"}</p>
      <p style="font-size: 30px;">${message || "No message provided"}</p>
      </div>
    </body>
  </html>
`,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
  } catch (error) {
    console.error(error);
  }
};
