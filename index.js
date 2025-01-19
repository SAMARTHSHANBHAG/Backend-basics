require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("samarthshanbhag");
});
app.get("/login", (req, res) => {
  res.send("<h1>Samarth is learning backend</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>I am learning backend from youtube</h2>");
});

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
