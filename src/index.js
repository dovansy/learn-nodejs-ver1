// const express = require("express");
import express from "express";
import configViewEngine from "./configs/viewEngine";
const app = express();
const port = 3030;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
  // res.send("Hello Steven Do");
});

app.get("/me", (req, res) => {
  res.send("Hello everybody Steven Do");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
