import { Router } from "express";
import { getListPricesMenuById } from "~/controllers";

export const router = Router();

router.get("/:id", getListPricesMenuById);
