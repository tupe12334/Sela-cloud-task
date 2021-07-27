const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");
const port = 8080;
const relpath = "../../client/build/"
// place holder for the data
const users = [
  {
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com",
  },
  {
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com",
  },
  {
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com",
  },
];

app.use(bodyParser.json());
app.use(express.static(process.cwd() + relpath));

app.get("/api/users", (req, res) => {
  console.log("api/users called!");
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  console.log("Adding user:::::", user);
  users.push(user);
  res.json("user addedd");
});

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + relpath + "/index.html");
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
