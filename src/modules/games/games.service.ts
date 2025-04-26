import { GamesRepository } from "./games.repository"
import { FieldsRepository } from "../fields/fields.repository"

export class GameService {
  static async craete() {
        // const gameManger = new GameManager();
    // gameManger.createGame();
    // GameRepository.createAndSave({ status: "not_started" });
    // create field
    const game = await GamesRepository.createAndSave()
    const field = await FieldsRepository.createAndSave({ game })
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