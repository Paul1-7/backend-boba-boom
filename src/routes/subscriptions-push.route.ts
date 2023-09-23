import { Router } from "express";
import { subscribePush } from "~/controllers";

export const router = Router();

router.post("/", subscribePush);
