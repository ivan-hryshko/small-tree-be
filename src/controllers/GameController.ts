import { Game } from "../models/Game";
export class GameController {

  static startGame(req: any, res: any) {
    // Logic to start the game
    const game = new Game();
    game.startGame();
    res.send("Game started!");
  }
}