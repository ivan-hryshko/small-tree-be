import { Router } from "express"
import baseRoutes from './base.route'
import gameRoutes from './game.route'

const routes = Router()

routes.use('/', baseRoutes)
routes.use('/games', gameRoutes)

export default routes
