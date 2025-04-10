import { Router } from "express"
import { BaseController } from "../controllers/BaseController"

const routes = Router()

routes.get('/', BaseController.sayHello)

export default routes