import { Game } from "../models/Game";
import { GameManager } from "../models/GameManager";
export class GameController {

  static createGame(req: any, res: any) {
    // Logic to start the game
    const gameManger = new GameManager();
    gameManger.createGame();
    res.send("Game started!");
  }
  static startGame(req: any, res: any) {
    // Logic to start the game
    const gameManger = new GameManager();
    gameManger.createGame();
    res.send("Game started!");
  }
}