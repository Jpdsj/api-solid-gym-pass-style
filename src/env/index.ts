import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'production', 'test']).default('dev'), // Define o ambiente como 'dev' por padrão
    PORT: z.coerce.number().default(3333), // Converte a porta para um número
})

// Valida as variáveis de ambiente
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error('❌ Invalid environment variables.', _env.error.format())

    throw new Error('Invalid environment variables.')
}

// env.data é um objeto que contém as variáveis de ambiente válidas
export const env = _env.data