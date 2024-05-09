import prisma from "../prisma";

import { IUser } from "../types/user.type";

type UserQuery = {
    id?: number,
    account?: string
}

class UserService {
    createUser(user: IUser) {
        const res = prisma.user.create({
            data: user
        })
        return res
    }
    getUserInfo({ id, account }: UserQuery) {
        let res
        if (id) {
            res = prisma.user.findUnique({
                where: { id },
                select: {
                    id: true,
                    name: true,
                    age: true,
                    gender: true,
                    email: true,
                    role: true,
                    createdTime: true,
                    updatedTime: true,
                }
            })
        }
        if (account) {
            res = prisma.user.findFirst({
                where: {
                    account
                }
            })
        }
        return res
    }
    update(id: number, user: any) {
        let res = prisma.user.update({
            where: {
                id
            },
            data: user
        })

        return res
    }
}

export default new UserService()