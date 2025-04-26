import { GamesRepository } from "./games.repository"

export class GameService {
  static async craete() {
        // const gameManger = new GameManager();
    // gameManger.createGame();
    // GameRepository.createAndSave({ status: "not_started" });
    const game = await GamesRepository.createAndSave()
    return game
  }

  static async preview({ id }: { id: string}) {
    // get game
    // get field
    // get trees
    const game = await GamesRepository.getById({ id })
    console.log('game :>> ', game);
    return `[ ]</br>
    [ ]</br>
     ${JSON.stringify(game)}`
  }
}