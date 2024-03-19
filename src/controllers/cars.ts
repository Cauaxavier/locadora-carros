import { Request, Response } from 'express'

export const registerCar = async (_: Request, res: Response) => {
    return res.status(200).json({ message: 'Car registered successfully.' })
}
