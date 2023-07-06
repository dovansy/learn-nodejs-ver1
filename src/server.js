import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./route/web";
import bodyParser from "body-parser";
import dotENV from "dotenv";

dotENV.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

configViewEngine(app);

initWebRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
