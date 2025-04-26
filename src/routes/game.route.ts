import { Router } from "express"
import { GameController } from "../modules/games/games.controller"

const routes = Router()

routes.get('/start', GameController.startGame)
routes.post('/create', GameController.createGame)
routes.get('/preview/:id', GameController.preview)

export default routes