import { Router } from 'express'
import { registerCar } from '../controllers/cars'
import usersController from '../controllers/users'

const routers = Router()

routers.post('/users', usersController.registerUser)
routers.post('/login', usersController.login)

routers.post('/cars', registerCar)

export default routers
