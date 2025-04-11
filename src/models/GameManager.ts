import { Game } from "./Game";

export class GameManager {
  private game: Game | null = null;

  constructor() {
  }

  public createGame(): void {
    if (this.game) {
      console.log("Game already exists.");

      return;
    }
    this.game = new Game();
    console.log("Game created!");
  }
}