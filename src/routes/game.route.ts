import { Router } from "express"
import { GameController } from "../controllers/GameController"

const routes = Router()

routes.get('/start', GameController.startGame)
routes.get('/create', GameController.createGame)

export default routes