import { Game } from "../../models/Game";
import { GameManager } from "../../models/GameManager";
import { GamesRepository } from "./games.repository";
import { GameResponse } from "./games.response";
import { GameService } from "./games.service";
export class GameController {

  static async createGame(req: any, res: any) {
    const game = await GameService.craete()
    const gameResponse = await GameResponse.getById(game)
    res.send(gameResponse);
  }
  static startGame(req: any, res: any) {
    const gameManger = new GameManager();
    gameManger.createGame();
    res.send("Game started!");
  }
  static async preview(req: any, res: any) {
    const params = req.params
    console.log('preview');
    const preview = await GameService.preview(params)
    res.send(preview);
  }
}