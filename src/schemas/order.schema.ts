import { z } from "zod";

export const OrderSchema = z.object({
  body: z.object({
    id: z.string().min(1, "El ID debe tener al menos 1 caracter"),
    customer: z.string().min(1, "El nombre del cliente es obligatorio"),
    total: z.number().min(1, "El total debe ser mayor o igual a 1"),
  }),
});
