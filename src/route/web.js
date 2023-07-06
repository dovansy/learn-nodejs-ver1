import express from "express";
import { HomeController } from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", HomeController.getHomePage);
  router.get("/user", HomeController.getUserPage);

  return app.use("/", router);
};

export default initWebRoutes;
