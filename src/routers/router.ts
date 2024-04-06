import { Router } from 'express'
import carsController from '../controllers/cars'
import usersController from '../controllers/users'
import validateBody from '../middlewares/validation-schema'
import authMiddleware from '../middlewares/auth_middleware'
import usersCreateMiddleware from '../schemas/users-create'

const routers = Router()

routers.post('/users', validateBody(usersCreateMiddleware) ,usersController.registerUser)
routers.post('/login', usersController.login)

routers.use(authMiddleware)
routers.post('/cars', carsController.registerCar)


export default routers
