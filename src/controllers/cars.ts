import { Request, Response } from 'express'

export const registerCar = async (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Car registered successfully.', user: req.userID })
}
