import { Request, Response } from 'express'
import { get_user_by_id } from '../data/users-sql'
import sqlCars from '../data/cars-sql'
import pool from '../config/conexao'

type Erro = {
    message: string
}

export default {
    async registerCar(req: Request, res: Response) {
        const carsData = req.body

        try {
            const user = await get_user_by_id(Number(req.userID))
            carsData.user_id = req.userID
            const car = await sqlCars.register(carsData)

            const { password:_, cpf:__, ...userInfo } = user
            const { user_id:___, ...carInfo } = car

            return res.status(200).json({ carInfo, userInfo })
            
        } catch {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    },

    async listCars(req: Request, res: Response) {
        try {
            const cars = await sqlCars.list()

            return res.status(200).json(cars)
        } catch {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    },

    async listMyCars(req: Request, res: Response) {
        try {
            const myCars = await sqlCars.listMyCars(Number(req.userID))

            return res.status(200).json(myCars)
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    },

    async updateCar(req: Request, res: Response) {
        const carsData = req.body
        const id = Number(req.params.id)
        
        try {
            carsData.user_id = req.userID

            await sqlCars.updateCar(carsData, id)
            
            return res.status(200).json()

        } catch(error) {
            const erro = error as Erro
            console.log(erro.message);
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}