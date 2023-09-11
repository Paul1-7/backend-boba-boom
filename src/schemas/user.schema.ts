import { z } from "zod";

export const userSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    user: z
      .string()
      .min(3, "El campo 'user' debe tener al menos 3 caracteres.")
      .max(20, "El campo 'user' no puede tener más de 20 caracteres."),
    password: z.string().min(8, "El campo 'password' debe tener al menos 8 caracteres."),
    idRol: z.string(),
  }),
});
