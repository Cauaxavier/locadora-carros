import { Request, Response, NextFunction } from 'express'
import { JoiSchema } from '../utils/types/types'

type Erro = {
    message: string
}

const validateBody = (joiSchema: JoiSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await joiSchema.validateAsync(req.body)
        return next()
    } catch (error) {
        const erro = error as Erro
        return res.status(500).json({ message: erro.message })
    }
}

export default validateBody