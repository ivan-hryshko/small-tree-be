import { Brackets } from 'typeorm'

import appDataSource from '../../config/app-data-source'
import { GameEntity } from '../games/game.entity'
import { TreeCellEntity } from './tree-cell.entity'
import { TreeEntity } from '../trees/trees.entity'
import { FieldCellEntity } from '../field-cells/field-cell.entity'

type TreeCellCreateParams = {
  tree: TreeEntity
  fieldCell: FieldCellEntity
}

export const treeCellsRepository = appDataSource.getRepository(TreeCellEntity).extend({
  async createAndSave(params: TreeCellCreateParams): Promise<TreeCellEntity> {
    const treeCell = new TreeCellEntity()
    treeCell.tree = params.tree
    treeCell.fieldCell = params.fieldCell
    await this.save(treeCell)
    return treeCell
  },

  async getById(query: any): Promise<any> {
    const tree = await this.findBy({ id: query.id })
    return tree
  },
})
