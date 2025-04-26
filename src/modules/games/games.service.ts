import { GamesRepository } from "./games.repository"

export class GameService {
  static async craete() {
        // const gameManger = new GameManager();
    // gameManger.createGame();
    // GameRepository.createAndSave({ status: "not_started" });
    const game = await GamesRepository.createAndSave()
    return game
  }

  static async preview() {
    // get game
    // get field
    // get trees
    const game = await GamesRepository.getById({})
    console.log('game :>> ', game);
    return `[ ]</br>
    [ ]</br>
     ${game}`
  }
}