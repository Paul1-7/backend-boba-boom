import { Application } from "express";

import { router as rFlavour } from "./flavours.route";
import { router as rMenu } from "./menus.route";
import { router as rOrder } from "./orders.route";
import { router as rPriceMenu } from "./prices-menu.route";
import { router as rRol } from "./rols.route";

const routerApi = (app: Application): void => {
  app.use("/api/v1/flavours", rFlavour);
  app.use("/api/v1/menus", rMenu);
  app.use("/api/v1/orders", rOrder);
  app.use("/api/v1/prices-menu", rPriceMenu);
  app.use("/api/v1/rols", rRol);
};

export default routerApi;
