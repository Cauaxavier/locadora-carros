import pool from '../config/conexao'
import { User } from '../utils/types/types'

export const register_user = async (user_data: User): Promise<User> => {
    
    const sql = /*sql*/`
        INSERT INTO users (name, email, cpf, password)
        VALUES ($1, $2, $3, $4) returning *
    `
    const values = [user_data.name, user_data.email, user_data.cpf, String(user_data.password)]
    console.log('chegou aqui');
    const { rows } = await pool.query(sql, values)
    return rows[0]
} 
