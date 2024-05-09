import jwt from 'jsonwebtoken'
import { Context, Next } from 'koa'

import userService from '../service/user.service'
import { JWT_SECRET } from '../constance'
import { callBallData } from '../utils/data.handler'
import { StatusCode } from '../constance'

export const auth = async (ctx: Context, next: Next) => {
    let { authorization = '' } = ctx.request.header || {}
    const token = authorization.replace('Bearer ', '') || ''
    try {
        let user = jwt.verify(token, JWT_SECRET) as { id: number }
        const res = await userService.getUserInfo({ id: user.id })
        if (res) {
            ctx.state.user = res
        } else {
            ctx.app.emit('error', callBallData(StatusCode.FORBIDDEN, 'user not exit.', ctx))
            return
        }
    } catch (err: any) {
        switch (err.name) {
            case 'TokenExpiredError':
                console.log('token expired');
                ctx.app.emit('error', callBallData(StatusCode.UNAUTHORIZED, 'token expired'), ctx)
                break;
            case 'JsonWebTokenError':
                console.log('token error');
                ctx.app.emit('error', callBallData(StatusCode.UNAUTHORIZED, 'token error'), ctx)
                break;
            default:
                console.log('default');
                ctx.app.emit('error', callBallData(StatusCode.UNAUTHORIZED, 'token not exit'), ctx)
                break;
        }
        return
    }
    await next()
}