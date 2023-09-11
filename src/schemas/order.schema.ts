import { z } from "zod";

const order = z.object({
  id: z.string().optional(),
  customer: z.string({
    required_error: "El campo del cliente es obligatorio.",
  }),
  total: z
    .number({
      coerce: true,
      invalid_type_error: "El valor tiene que ser un número",
    })
    .min(0, { message: "El total debe ser un número positivo." }),
});

const BobaOrderDetailI = z.object({
  idOrder: z.string().optional(),
  idShake: z.string({ required_error: "requerido" }),
  idMenu: z.string().min(1, { message: "El campo del menú es obligatorio." }).optional(),
  idBoba1: z.string().min(1, { message: "Tiene que seleccionar al menos un sabor" }),
  idBoba2: z.string().optional(),
  idBoba3: z.string().optional(),
});

const WaffleOrderDetailI = z.object({
  idOrder: z.string().optional(),
  idFruit: z.string({ required_error: "requerido" }).min(1, { message: "Tiene que seleccionar una fruta" }),
  idMenu: z.string().min(1, { message: "El campo del menú es obligatorio." }).optional(),
  idCoating: z.string().min(1, { message: "Tiene que seleccionar una cubierta" }),
  idTopping: z.string({ required_error: "requerido" }).optional(),
});

export const orderSchema = z.object({
  body: z.object({
    order,
    bobaDetail: z.array(BobaOrderDetailI),
    waffleeDetail: z.array(WaffleOrderDetailI),
  }),
});
