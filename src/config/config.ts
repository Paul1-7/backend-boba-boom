export const CONFIG = {
  PORT: process.env.PORT || 3000,
  ENVIRONMENT: process.env.NODE_ENV || "DEVELOPMENT",
  IsProduction: (): boolean => CONFIG.ENVIRONMENT.toUpperCase() === "PRODUCTION",
  DATABASE_URL: process.env.DATABASE_URL || "",
  WEB_PUSH_PUBLIC_KEY: process.env.WEB_PUSH_PUBLIC_KEY || "",
  WEB_PUSH_PRIVATE_KEY: process.env.WEB_PUSH_PRIVATE_KEY || "",
};
