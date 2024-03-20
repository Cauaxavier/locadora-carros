import { Request, Response } from 'express'
import { register_user } from '../data/users-sql';

type Erro = {
    message: string
}

export const registerUser = async (req: Request, res: Response) => {
    const user_data = req.body;

    try {
        
        const user = await register_user(user_data)
        
        return res.status(200).json(user)
    } catch(error)  {
        const erro = error as Erro
        console.log(erro.message);
        return res.status(500).json({ message: 'Error in server' })
    }
}