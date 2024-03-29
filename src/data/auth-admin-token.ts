import { sign, verify } from 'jsonwebtoken'
import env from '../config/env'

export const createToken = (user: { id: number }): string => {
    return sign(user, env.jwt.secretKey, env.jwt.options)
}

export const getUser = (token: string) => {
    try {
        return verify(token, env.jwt.secretKey)
    } catch {
        return
    }
}