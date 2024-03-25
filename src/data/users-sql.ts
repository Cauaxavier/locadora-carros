import pool from '../config/conexao'
import { QueryResult  } from 'pg'
import { User } from '../utils/types/types'

export const register_user = async (user_data: User): Promise<User> => {
    
    const sql = /*sql*/`
        INSERT INTO users (name, email, cpf, password)
        VALUES ($1, $2, $3, $4) returning *
    `

    const values = [user_data.name, user_data.email, user_data.cpf, user_data.password]
    console.log(pool);
    const result: QueryResult = await pool.query(sql, values)

    return result.rows[0] 
} 
