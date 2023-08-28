const express = require("express");
var expressStaticGzip = require("express-static-gzip");

const app = express();

require("./routes/contactRoute")(app);

if (process.env.NODE_ENV === "production") {
  app.use(expressStaticGzip("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);
console.log(`Listening on PORT:${PORT}`);
