import { Request, Response } from 'express'

export const registerUser = async (req: Request, res: Response) => {
    const user_data = req.body;

    try {
        
    } catch  {
        return res.status(500).json({ message: 'Error in server' })
    }
}