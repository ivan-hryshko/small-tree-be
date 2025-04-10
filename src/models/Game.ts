export class Game {
  private isGameStarted: boolean = false;

  public constructor() {
    // Private constructor to prevent instantiation
  }

  public startGame(): void {
    if (this.isGameStarted) {
      console.log("Game is already started.");
      return;
    }
    this.isGameStarted = true;
    // create field
    console.log("Game started!");
  }

  public endGame(): void {
    if (!this.isGameStarted) {
      console.log("No game is currently running.");
      return;
    }
    this.isGameStarted = false;
    console.log("Game ended!");
  }
  public getGameStatus(): string {
    return this.isGameStarted ? "Game is running." : "No game is currently running.";
  }
  public resetGame(): void {
    this.isGameStarted = false;
    console.log("Game has been reset.");
  }

  public getisGameStarted(): boolean {
    return this.isGameStarted;
  }
  public setisGameStarted(value: boolean): void {
    this.isGameStarted = value;
  }
}