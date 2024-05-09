import Router from '@koa/router'

import userController from '../controller/user.controller'
import { auth } from '../middleware/auth.middleware'

const router = new Router({ prefix: '/user' })

router.use(auth)

router.put('/update', userController.update)


/**
* @swagger
* tags:
*   name: User
*   description: User management
*/
/**
 * @swagger
 * /user/info:
 *   get:
 *     summary: get user info
 *     description: get user info
 *     tags: [User]
 *     responses:
 *       200:
 *         description: get user info success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  code:
 *                      type: integer
 *                  data:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name:
 *                              type: string
 *                          age:
 *                              type: integer
 *                          gender:
 *                              type: string
 *                          email:
 *                              type: integer
 *                          role:
 *                              type: string
 *                          createdTime:
 *                              type: string
 *                          updateTime:
 *                              type: string
 *                  messge:
 *                      type: string
 */
router.get('/info', userController.getUserInfo)

export default router
