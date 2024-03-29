import { Router } from 'express'
import { registerCar } from '../controllers/cars'
import usersController from '../controllers/users'
import validateBody from '../middlewares/validation-schema'
import usersCreateMiddleware from '../schemas/users-create'
const routers = Router()

routers.post('/users', validateBody(usersCreateMiddleware) ,usersController.registerUser)
routers.post('/login', usersController.login)

routers.post('/cars', registerCar)

export default routers
