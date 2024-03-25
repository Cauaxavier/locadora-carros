import dotenv from 'dotenv'

dotenv.config()

export default {
    db: {
        host: String(process.env.DB_HOST),
        port: Number(process.env.DB_PORT),
        user: String(process.env.DB_USER),
        password: String(process.env.DB_PASS),
        database: String(process.env.DB_NAME)
    }
}
