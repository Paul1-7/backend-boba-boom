import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    user: z
      .string()
      .min(3, "El campo 'user' debe tener al menos 3 caracteres.")
      .max(20, "El campo 'user' no puede tener más de 20 caracteres."),
    password: z.string().max(30, "El campo  debe tener como maximo 30 caracteres."),
  }),
});
