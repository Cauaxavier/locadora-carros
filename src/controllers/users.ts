import { Request, Response } from 'express'
import { get_user_by_email, register_user } from '../data/users-sql';
import { compare, hash } from 'bcrypt'
import { z } from 'zod'
import { createToken } from '../data/auth-admin-token'

export default { 
    async registerUser(req: Request, res: Response) {
        const userData = req.body;

        try {
            const encryptedPassword = await hash(userData.password, 10)
            
            userData.password = encryptedPassword
            
            const user = await register_user(userData)

            const { password:_, cpf:__, ...userInfo } = user
            
            return res.status(200).json(userInfo)
        } catch(error)  {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    },

    async login(req: Request, res: Response) {
        const loginSchema = z.object({
            email: z.string().email(),
            password: z.string().min(5)
        })
    
        const { email, password } = loginSchema.parse(req.body)
    
        try {
            const user = await get_user_by_email(email)
        
            if (!user) {
                return res.status(401).json({ message: 'Email or password invalid.' })
            }
        
            const isEqual = await compare(password, user.password)
        
            if (!isEqual) {
                return res.status(401).json({ message: 'Email or password invalid.' })
            }
    
            const token = createToken({ id: user.id! })
        
            const { password:_, cpf:__,  ...userInfo} = user
    
            return res.status(202).json({ userInfo, token })
            
        } catch (error) { 
            return res.status(500).json({ message:'Internal Server Error' })
        }
    }  
}    