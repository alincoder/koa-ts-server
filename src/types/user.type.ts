export interface IUser {
    id?: number
    name?: string,
    age?: number,
    gender?: string,
    account: string,
    password: string,
    email: string,
    code?: string,
    role?: string
}

export type TUpdateUserParams = Pick<IUser, Exclude<keyof IUser, 'account' | 'password'>>