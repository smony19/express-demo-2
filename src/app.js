const express = require("express");
const app = express();

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  const msg = `This was a ${req.method} request from a browser.`;
  res.send(msg);
});

function controller(req, res) {
  const data = {
    method: req.method,
    num: Math.random(),
    str: "Hello World!",
  };
  res.json(data);
}

app.get("/extra", controller);
module.exports = app;