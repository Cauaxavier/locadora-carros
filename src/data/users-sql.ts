import pool from '../config/conexao'
import { QueryResult  } from 'pg'
import { User } from '../utils/types/types'

export const register_user = async (user_data: User): Promise<User> => {
    
    const sql = /*sql*/`
        INSERT INTO users (name, email, cpf, password)
        VALUES ($1, $2, $3, $4) returning *
    `

    const values = [user_data.name, user_data.email, user_data.cpf, user_data.password]
   
    const result: QueryResult = await pool.query(sql, values)

    return result.rows[0] 
}

export const get_user_by_email = async (email: string): Promise<User> => {

    const sql = /*sql*/ `
        SELECT * FROM users WHERE email = $1
    `

    const result: QueryResult = await pool.query(sql, [email])

    return result.rows[0]
}

export const get_user_by_cpf = async (cpf: string): Promise<User> => {

    const sql = /*sql*/ `
        SELECT * FROM users WHERE cpf = $1
    `

    const result: QueryResult = await pool.query(sql, [cpf])

    return result.rows[0]
}

export const get_user_by_id = async (id: number): Promise<User> => {

    const sql = /*sql*/ `
        SELECT * FROM users WHERE id = $1
    `

    const result: QueryResult = await pool.query(sql, [id])

    return result.rows[0]
}