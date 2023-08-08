const express = require("express");
const app = express();

const User = require("./models/User.js")

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    if(!user) {
      throw new isError("No user was created")
    } 
    res.send(user.username)
  } catch (errors) {
    console.log(`error: ${JSON.stringify(errors)}`)
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    if(!users) {
      throw new Error("No users found");
    } 
    res.send(users)
  } catch (error) {
    //console.log(`${error}`)
  }

});

module.exports = app;