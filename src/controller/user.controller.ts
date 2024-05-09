import { Context } from 'koa'

import userService from '../service/user.service'
import { callBallData } from '../utils/data.handler';
import { Message, StatusCode } from '../constance';
import { TUpdateUserParams } from '../types/user.type';

class UserController {
    async update(ctx: Context) {
        const userInfo = ctx.request.body as TUpdateUserParams
        let user = ctx.state.user
        let res = await userService.update(user.id, userInfo)
        let code, message
        if (res) {
            code = StatusCode.SUCCESS
            message = Message.SUCCESS
        } else {
            code = StatusCode.ERROR
            message = Message.ERROR
        }
        ctx.body = callBallData(code, message)
    }
    async getUserInfo(ctx: Context) {
        let user = ctx.state.user
        let code, message, data
        if (user) {
            code = StatusCode.SUCCESS
            message = Message.SUCCESS
            data = user
        } else {
            code = StatusCode.ERROR
            message = Message.ERROR
        }
        ctx.body = callBallData(code, message, data)
    }
}

export default new UserController()