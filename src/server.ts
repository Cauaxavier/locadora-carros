import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routers/router'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routers)

app.listen(process.env.PORT, () => {
    console.log(`server running in port ${process.env.PORT}`)
})
