import { Router } from "express"
import baseRoutes from './base.route'
import gameRoutes from './game.route'

const routes = Router()

routes.use('/', baseRoutes)
routes.use('/game', gameRoutes)

export default routes
