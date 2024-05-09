import Router from '@koa/router'
import { koaSwagger } from 'koa2-swagger-ui'
import { swaggerSpec } from '../swagger'

const router = new Router({ prefix: '/swagger' })

router.get('/', koaSwagger({
    routePrefix: false,
    swaggerOptions: {
        spec: swaggerSpec as Record<string, unknown>,
    },
}))

export default router