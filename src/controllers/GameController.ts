import { Game } from "../models/Game";
import { GameManager } from "../models/GameManager";
import { GameRepository } from "../repository/game.repository";
export class GameController {

  static createGame(req: any, res: any) {
    const gameManger = new GameManager();
    gameManger.createGame();
    GameRepository.createAndSave({ status: "not_started" });
    res.send("Game created!");
  }
  static startGame(req: any, res: any) {
    const gameManger = new GameManager();
    gameManger.createGame();
    res.send("Game started!");
  }
}