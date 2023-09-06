import { FindOptions } from "sequelize";

interface QueryFilter {
  [key: string]: unknown;
}
export const buildSequelizeOptions = (query: QueryFilter): FindOptions => {
  const sequelizeOptions: FindOptions = {
    where: { ...query },
  };

  return sequelizeOptions;
};
