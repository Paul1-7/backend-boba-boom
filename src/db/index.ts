import { Sequelize } from "sequelize-typescript";
import { CONFIG } from "~/config/config";
import { ErrorResponse } from "~/utils";
import { Flavour, Menu, Order, OrderDetail, PriceMenu, Rol } from "./models";

export const sequelize = new Sequelize(CONFIG.DATABASE_URL, {
  dialect: "postgres",
  define: {
    paranoid: true,
  },
  logging: (sql) => {
    if (CONFIG.IsProduction()) {
      return;
    }
    console.log(sql);
  },
});

sequelize.addModels([Order, Flavour, Menu, OrderDetail, PriceMenu, Rol]);

sequelize.addHook("beforeSave", (instance) => {
  for (const field in instance.dataValues) {
    if (typeof instance[field] === "string") {
      instance[field] = instance[field].trim();
    }
  }
});

sequelize.addHook("beforeValidate", (instance) => {
  if (instance.isSoftDeleted()) {
    return Promise.reject(ErrorResponse.badRequest("El registro no esta disponible"));
  }

  return Promise.resolve();
});

export default async function DBInit() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }
}
