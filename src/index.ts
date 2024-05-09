import koa, { Context } from 'koa'
import bodyparser from 'koa-bodyparser'
import cors from '@koa/cors'
import koaStatic from 'koa-static'

import router from './router'
import path from 'path'
import { errorHadnle } from './utils/data.handler'

const app: any = new koa()
app.use(koaStatic(path.join(__dirname, './statics/upload')))
app.use(cors())
app.use(bodyparser())


app.use(router.routes()).use(router.allowedMethods())

app.on('error', errorHadnle)
app.listen(3030, () => {
    console.log('server run at 3030');
})

export default app