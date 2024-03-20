import { Router } from 'express'
import { registerCar } from '../controllers/cars'
import { registerUser } from '../controllers/users'

const routers = Router()

routers.post('/cars', registerCar)
routers.post('/users', registerUser)

export default routers
