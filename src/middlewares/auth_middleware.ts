import { Request, Response, NextFunction } from 'express'
import { getUser } from '../data/auth-admin-token'
import { z } from 'zod'

export default async (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization!

    const idSchema = z.object({
        id: z.number().optional()
    })

    if (!bearer) {
        return res.status(401).json({ message: "Token don't sent." })
    }
    
    const token = bearer.split(' ')[1]

    const { id } = idSchema.parse(getUser(token))
    
    if (!id) {
        return res.status(401).json({ message: "User don't authorized." })
    }

    req.userID = String(id)

    next()
}
