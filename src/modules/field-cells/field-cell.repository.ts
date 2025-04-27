import { Brackets } from 'typeorm'

import appDataSource from '../../config/app-data-source'
import { GameEntity } from '../games/game.entity'
import { FieldCellEntity } from './field-cell.entity'
import { FieldEntity } from '../fields/fields.entity'

type FieldCellCreateParams = {
  field: FieldEntity
  x: number
  y: number
}

export const fieldCellsRepository = appDataSource.getRepository(FieldCellEntity).extend({
  async createAndSave(params: FieldCellCreateParams): Promise<FieldCellEntity> {
    const fieldCell = new FieldCellEntity()
    fieldCell.field = params.field
    fieldCell.x = params.x
    fieldCell.y = params.y
    await this.save(fieldCell)
    return fieldCell
  },

  async getById(query: any): Promise<any> {
    const field = await this.findBy({ id: query.id })
    return field
  },
})
