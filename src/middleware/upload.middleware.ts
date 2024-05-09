import multer from '@koa/multer'

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'src/statics/upload')
    },
    filename(ctx, file, cb) {
        const filename = file.originalname.split('.').pop()
        cb(null, Date.now() + '.' + filename)
    }
})

const uplaodMiddleware = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024
    }
})

export default uplaodMiddleware