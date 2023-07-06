import { Sequelize } from "sequelize";

let getHomePage = (req, res) => {
  return res.send("Home page controller");
};

let getUserPage = (req, res) => {
  return res.render("homePage.ejs");
};

export const HomeController = {
  getHomePage,
  getUserPage,
};
