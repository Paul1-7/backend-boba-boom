import { Router } from "express";
import { addUser, deleteUser, getUserById, getListUsers, updateUser } from "~/controllers";
import { validateScheme } from "~/middlewares";
import { userSchema } from "~/schemas";

export const router = Router();

router.get("/", getListUsers);
router.get("/:id", getUserById);
router.post("/", [validateScheme(userSchema)], addUser);
router.put("/:id", [validateScheme(userSchema)], updateUser);
router.delete("/:id", deleteUser);
