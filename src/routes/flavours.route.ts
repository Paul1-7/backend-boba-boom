import { Router } from "express";
import { addFlavour, deleteFlavour, getFlavourById, getListFlavours, updateFlavour } from "~/controllers";
import { validateScheme } from "~/middlewares";
import { flavourSchema } from "~/schemas";

export const router = Router();

router.get("/", getListFlavours);
router.get("/:id", getFlavourById);
router.post("/", [validateScheme(flavourSchema)], addFlavour);
router.put("/:id", [validateScheme(flavourSchema)], updateFlavour);
router.delete("/:id", deleteFlavour);
