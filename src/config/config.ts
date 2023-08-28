export const CONFIG = {
  PORT: process.env.PORT || 3000,
  ENVIRONMENT: process.env.NODE_ENV || "DEVELOPMENT",
  IsProduction: (): boolean => CONFIG.ENVIRONMENT.toUpperCase() === "PRODUCTION",
  DATABASE_URL: process.env.DATABASE_URL || "",
};
