import type { Config } from "drizzle-kit";
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

export default {
    schema: "./src/db/*",
    out: "./drizzle",
    connectionString: process.env.DB_URL,
} satisfies Config