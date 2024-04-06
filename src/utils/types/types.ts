export type User = {
    id?: number,
    name: string,
    email: string,
    cpf: string,
    password: string,
}

export type Car = {
  id?: number,
  model: string,
  brand: string,
  color: string,
  user_id: string
}

export type JoiSchema = {
    validateAsync: (value: any) => Promise<any>
}

declare global {
    namespace Express {
      interface Request {
        userID?: string;
      }
    }
}