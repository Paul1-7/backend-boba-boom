import { Router } from "express";
import { getListMenus } from "~/controllers";

export const router = Router();

router.get("/", getListMenus);
