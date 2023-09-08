import { Router } from "express";
import { getListPricesMenu } from "~/controllers";

export const router = Router();

router.get("/", getListPricesMenu);
