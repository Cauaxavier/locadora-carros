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
    },

    async list() {
        const sql = /*sql*/ `
            SELECT * FROM cars
        `

        const result: QueryResult = await pool.query(sql)

        return result.rows
    },

    async listMyCars(user_id: number) {
        const sql = /*sql*/ `
            SELECT * FROM cars WHERE user_id = $1
        `

        const result: QueryResult = await pool.query(sql, [user_id])
        
        return result.rows
    },

    async updateCar(car: Car, id: number): Promise<void> {
        const sql = /*sql*/ `
            UPDATE cars set model = $1, brand = $2, color = $3 
            WHERE id = $4 AND user_id = $5;
        `

        const values = [car.model, car.brand, car.color, String(id), car.user_id]

        await pool.query(sql, values)

    }
}