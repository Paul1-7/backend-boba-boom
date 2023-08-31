import { Router } from "express";
import { getListRols } from "~/controllers";

export const router = Router();

router.get("/", getListRols);
