import { GameEntity } from "./game.entity";
import { GamesRepository } from "./games.repository";

export class GameResponse {
  static async getById(game: GameEntity) {
    const gamePreview = await GamesRepository.getById(game)
    return {
      game: gamePreview
    }
  }
}