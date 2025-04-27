import { Brackets } from 'typeorm'

import appDataSource from '../../config/app-data-source'
import { FieldEntity } from './fields.entity'
import { GameEntity } from '../games/game.entity'
import { FieldCellService } from '../field-cells/field-cell.service'

type FieldCrraeteparams = {
  game: GameEntity
}

export const FieldsRepository = appDataSource.getRepository(FieldEntity).extend({
  async createAndSave(params: FieldCrraeteparams): Promise<FieldEntity> {
    const field = new FieldEntity()
    field.game = params.game
    field.height = 10
    field.width = 20
    console.log('field :>> ', field);
    await this.save(field)
    for (let y = 0; y < field.height; y++) {
      for (let x = 0; x < field.width; x++) {
        const cell = await FieldCellService.create({ fieldId: field.id, x, y })
      }
    }
    return field
  },

  async getById(query: any): Promise<any> {
    const field = await this.findBy({ id: query.id })
    return field
  },
})
