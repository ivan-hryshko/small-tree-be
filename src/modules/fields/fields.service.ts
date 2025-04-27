import { GameEntity } from '../games/game.entity'
import { FieldEntity } from './fields.entity'
import { FieldsRepository } from './fields.repository'

export class FieldsService {
  static async create(params : { game: GameEntity}) {
    // check game exist
    // const game =
    const field = await FieldsRepository.createAndSave({ game: params.game })
    return
  }
}