import { Brackets } from 'typeorm'

import appDataSource from '../../config/app-data-source'
import { FieldEntity } from './fields.entity'
import { GameEntity } from '../games/game.entity'

type FieldCrraeteparams = {
  game: GameEntity
}

export const FieldsRepository = appDataSource.getRepository(FieldEntity).extend({
  async createAndSave(params: FieldCrraeteparams): Promise<FieldEntity> {
    const field = new FieldEntity()
    field.game = params.game
    console.log('field :>> ', field);
    await this.save(field)
    return field
  },

  async getById(query: any): Promise<any> {
    const field = await this.findBy({ id: query.id })
    return field
  },
})
