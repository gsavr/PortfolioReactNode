const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

sgMail.setApiKey(keys.sendGridKey);

module.exports = (app) => {
  app.post("/api/contact", async (req, res) => {
    const {
      name,
      email,
      phone = "Not provided",
      message = "No Message Provided",
    } = req.body;

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
            <p style="font-size: 30px;">Phone: ${phone}</p>
            <p style="font-size: 30px;">${message}</p>
          </div>
        </body>
      </html>
    `,
    };
    try {
      await sgMail.send(msg);
      console.log("Email sent");
      res.send("Success");
    } catch (error) {
      console.error(error);
      res.status(422).send(err);
      //
      if (error.response) {
        console.error(error.response.body);
      }
    }
  });
};
