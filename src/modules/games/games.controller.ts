import { Game } from "../../models/Game";
import { GameManager } from "../../models/GameManager";
import { GamesRepository } from "./games.repository";
import { GameService } from "./games.service";
export class GameController {

  static async createGame(req: any, res: any) {
    const game = await GameService.craete()
    res.send({ game });
  }
  static startGame(req: any, res: any) {
    const gameManger = new GameManager();
    gameManger.createGame();
    res.send("Game started!");
  }
  static preview(req: any, res: any) {
    console.log('preview');
    const preview = GameService.preview()
    res.send(preview);
  }
}