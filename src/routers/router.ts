import { Router } from 'express'
import { registerCar } from '../controllers/cars'

const routers = Router()

routers.post('/cars', registerCar)

export default routers