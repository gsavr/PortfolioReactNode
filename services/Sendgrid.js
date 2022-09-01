const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

sgMail.setApiKey(keys.sendGridKey);

const message = {
  name: "Trial",
  email: "trial",
  phone: "Not provided",
  message: "Message Not Provided",
};

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
      <p style="font-size: 30px;">Name: ${message.name}</p>
      <p style="font-size: 30px;">Email: ${message.email}</p>
      <p style="font-size: 30px;">Phone: ${message.phone}</p>
      <p style="font-size: 30px;">${message.message}</p>
      </div>
    </body>
  </html>
`,
};
async () => {
  try {
    await sgMail.send(msg);
    console.log("Email sent");
  } catch (error) {
    console.error(error);
  }
};
