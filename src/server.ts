import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routers/router'

dotenv.config()

const app = express()
const port = Number(process.env.PORT)

app.use(cors())
app.use(express.json())
app.use(routers)

app.listen(port, () => {
    console.log(`server running in port ${port}`)
})
