import { Router } from "express";
import { addOrder, changeStateOrder, deleteOrder, getListOrders, getOrderById, updateOrder } from "~/controllers";
import { validateScheme } from "~/middlewares";
import { orderSchema } from "~/schemas";

export const router = Router();

router.get("/", getListOrders);
router.get("/:id", getOrderById);
router.put("/change-states/:id", changeStateOrder);
router.post("/", [validateScheme(orderSchema)], addOrder);
router.put("/:id", [validateScheme(orderSchema)], updateOrder);
router.delete("/:id", deleteOrder);
