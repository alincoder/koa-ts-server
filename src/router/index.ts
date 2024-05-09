import fs from 'fs'
import Router from '@koa/router'
let router = new Router()

let files = fs.readdirSync(__dirname)
files.forEach(file => {
    if (file != 'index.ts') {
        let r = require('./' + file)
        router.use(r.default.routes())
    }
})

export default router