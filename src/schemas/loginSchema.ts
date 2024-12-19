import { z } from 'zod';

const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email requerido',
    })
    .email('Email inválido')
    .min(4, 'Mínimo 4 caracteres'),
  password: z
    .string()
    .min(1, 'Contraseña requerida')
    .min(4, 'Mínimo 4 caracteres')
    .max(16, 'Máximo 16 caracteres'),
});

export default loginSchema;
