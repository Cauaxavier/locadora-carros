import { QueryResult } from "pg";
import { Car } from "../utils/types/types";
import pool from "../config/conexao";


export default {

    async register(car_data: Car): Promise<Car> {
        const sql = /*sql*/ `
            INSERT INTO cars (model, brand, color, user_id)
            VALUES ($1, $2, $3, $4) returning *
        `

        const values = [car_data.model, car_data.brand, car_data.color, car_data.user_id]

        const result: QueryResult = await pool.query(sql, values)
        
        return result.rows[0]
    }
}