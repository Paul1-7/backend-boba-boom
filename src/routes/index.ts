import express, { Application, Router } from "express";
import fs from "fs-extra";

const router: Router = express.Router();

const PATH_ROUTES: string = __dirname;

const removeExtension = (filename: string): string => {
  return filename.split(".").shift();
};

const routerApi = (app: Application): void => {
  app.use("/api/v1/", router);
  fs.readdirSync(PATH_ROUTES).filter((file: string) => {
    const name = removeExtension(file);
    if (name !== "index") {
      import(`./${file}`).then((module) => {
        router.use(`/${name}`, module.router);
      });
    }
  });
};

export default routerApi;
