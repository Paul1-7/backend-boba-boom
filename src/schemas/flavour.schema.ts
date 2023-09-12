import { z } from "zod";

export const flavourSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    type: z.string().min(1, { message: "El tipo es requerido" }),
    name: z.string().min(1, { message: "El nombre es requerido" }),
    idMenu: z.string().min(1, { message: "El ID del menú es requerido" }),
    price: z.number({ coerce: true, invalid_type_error: "solo se permiten numeros" }),
  }),
});
