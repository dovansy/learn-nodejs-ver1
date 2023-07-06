import express from "express";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", (rep, res) => {
    return res.send("Hello Steven");
  });
  return app.use("/", router);
};

export default initWebRoutes;
