import { Game } from "../models/Game";
import { GameManager } from "../models/GameManager";
export class GameController {

  static createGame(req: any, res: any) {
    const gameManger = new GameManager();
    gameManger.createGame();
    res.send("Game started!");
  }
  static startGame(req: any, res: any) {
    const gameManger = new GameManager();
    gameManger.createGame();
    res.send("Game started!");
  }
}