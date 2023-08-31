import { Router } from "express";
import { getListOrders } from "~/controllers";
// import { validateScheme } from "~/middlewares";

export const router = Router();

router.get("/", getListOrders);
// router.get("/:id", getEmployeeById);
// router.post("/", [validateScheme(EmployeeSchema)], addEmployee);
// router.put("/:id", [validateScheme(EmployeeSchema)], updateEmployee);
// router.delete("/:id", deleteEmployee);
