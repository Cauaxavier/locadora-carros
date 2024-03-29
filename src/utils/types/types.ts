export type User = {
    id?: number
    name: string,
    email: string,
    cpf: string,
    password: string,
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