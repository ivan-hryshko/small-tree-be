import { Game } from "./Game";

export class GameManager {

  private game: Game;

  constructor(game: Game) {
    this.game = game || null;
  }

  createGame(): void {
    if (this.game) {
      console.log("Game already exists.");
      return;
    }
    this.game = new Game();
    console.log("Game created!");
  }
}