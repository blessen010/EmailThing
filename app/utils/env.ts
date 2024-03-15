import { createId } from "@paralleldrive/cuid2"
import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().min(1),
        EMAIL_AUTH_TOKEN: z.string().min(1),
        EMAIL_DKIM_PRIVATE_KEY: z.string().optional(),
        JWT_TOKEN: z.string(),
        WEB_NOTIFICATIONS_PRIVATE_KEY: z.string().min(1),
        S3_KEY_ID: z.string().optional(),
        S3_SECRET_ACCESS_KEY: z.string().optional(),
        S3_URL: z.string().optional(),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().min(1),
        NEXT_PUBLIC_NOTIFICATIONS_PUBLIC_KEY: z.string().min(1),
    },
    runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_NOTIFICATIONS_PUBLIC_KEY: process.env.NEXT_PUBLIC_NOTIFICATIONS_PUBLIC_KEY,
        WEB_NOTIFICATIONS_PRIVATE_KEY: process.env.WEB_NOTIFICATIONS_PRIVATE_KEY,
        EMAIL_AUTH_TOKEN: process.env.EMAIL_AUTH_TOKEN,
        EMAIL_DKIM_PRIVATE_KEY: process.env.EMAIL_DKIM_PRIVATE_KEY,
        JWT_TOKEN: process.env.JWT_TOKEN || createId(),
        S3_KEY_ID: process.env.S3_KEY_ID,
        S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
        S3_URL: process.env.S3_URL,
    },
})
