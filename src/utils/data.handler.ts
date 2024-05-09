import { Context } from 'koa'

export const callBallData = (code: number = 0, message: string = 'request error', data?: any) => {
    return {
        code,
        message,
        data: data || null
    }
}

export const errorHadnle = (err: any, ctx: Context) => {
    ctx.body = err
}