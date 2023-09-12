import { Router } from "express";
import { loginUser } from "~/controllers";
import { validateScheme } from "~/middlewares";
import { loginSchema } from "~/schemas";

export const router = Router();

router.post("/login", [validateScheme(loginSchema)], loginUser);
