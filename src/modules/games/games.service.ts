import { GamesRepository } from "./games.repository"
import { FieldsRepository } from "../fields/fields.repository"
import { FieldsService } from "../fields/fields.service"
import appDataSource from "../../config/app-data-source"
import { EntityManager } from "typeorm"

export class GameService {
  static async craete() {
        // const gameManger = new GameManager();
    // gameManger.createGame();
    // GameRepository.createAndSave({ status: "not_started" });
    // create field
    return await appDataSource.transaction(async (manager: EntityManager) => {
      const game = await GamesRepository.createAndSave(manager)

      const field = await FieldsService.create({ manager, game })
      // await FieldsRepository.createAndSave({ game })
      return game
    })
  }

  static prepareFieldPreview(height: number, width: number): string {
    let result = ''
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        result = result + '[ ]'
      }
      result = result + '</br>'
    }
    return result
  }

  static async preview({ id }: { id: string}) {
    // get game
    // get field
    // get trees
    const game = await GamesRepository.getById({ id })
    console.log('game :>> ', game);
    const fieldPreview = this.prepareFieldPreview(game.field.height, game.field.width)
    return `${fieldPreview}
     ${JSON.stringify(game)}`
  }
}