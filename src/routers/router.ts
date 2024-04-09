import { Router } from 'express'
import carsController from '../controllers/cars'
import usersController from '../controllers/users'
import validateBody from '../middlewares/validation-schema'
import authMiddleware from '../middlewares/auth_middleware'
import usersCreateMiddleware from '../schemas/users-create'
import usersLoginMiddleware from '../schemas/users-login'
import carsCreateMiddleware from '../schemas/cars-create'
import carsUpdateMiddleware from '../schemas/cars-update'

const routers = Router()

routers.post('/users', validateBody(usersCreateMiddleware), usersController.registerUser)
routers.post('/login', validateBody(usersLoginMiddleware), usersController.login)
routers.get('/cars', carsController.listCars)

routers.use(authMiddleware)
routers.post('/cars', validateBody(carsCreateMiddleware) ,carsController.registerCar)
routers.post('/cars/me', carsController.listMyCars)
routers.put('/cars/:id', validateBody(carsUpdateMiddleware),carsController.updateCar)
routers.delete('/cars/:id', carsController.deleteCar)

export default routers
