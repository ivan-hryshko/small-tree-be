import { Router } from "express"
import baseRoutes from './base.route'

const routes = Router()

routes.use('/', baseRoutes)

export default routes
