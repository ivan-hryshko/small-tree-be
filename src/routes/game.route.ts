import { Router } from "express"
import { GameController } from "../controllers/GameController"

const routes = Router()

routes.get('/start', GameController.startGame)
routes.post('/create', GameController.createGame)
routes.get('/preview', GameController.createGame)

export default routes