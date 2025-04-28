import { EntityManager } from 'typeorm'

import appDataSource from '../../config/app-data-source'
import { FieldEntity } from './fields.entity'
import { GameEntity } from '../games/game.entity'
import { FieldCellService } from '../field-cells/field-cell.service'
import { FieldCellEntity } from '../field-cells/field-cell.entity'

type FieldCreateParams = {
  game: GameEntity
  manager: EntityManager
}

export const FieldsRepository = appDataSource.getRepository(FieldEntity).extend({
  async createAndSave(params: FieldCreateParams): Promise<FieldEntity> {
    const field = new FieldEntity()
    field.game = params.game
    field.height = 10
    field.width = 20
    field.fieldCells = []
    console.log('field :>> ', field);
    for (let y = 0; y < field.height; y++) {
      for (let x = 0; x < field.width; x++) {
        const cell = new FieldCellEntity();
        cell.x = x;
        cell.y = y;
        cell.field = field;
        field.fieldCells.push(cell);
        // const cell = await FieldCellService.create({ fieldId: field.id, x, y })
      }
    }
    await params.manager.save(field)
    return field
  },

  async getById(query: any): Promise<any> {
    const field = await this.findBy({ id: query.id })
    return field
  },
})
