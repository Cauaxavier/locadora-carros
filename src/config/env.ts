export default {
    db: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: String(process.env.DB_PASS),
        database: process.env.DB_NAME
    }
}
