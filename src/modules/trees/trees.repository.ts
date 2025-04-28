import { EntityManager } from 'typeorm'

import appDataSource from '../../config/app-data-source'
import { GameEntity } from '../games/game.entity'
import { TreeEntity } from './trees.entity'

type TreeCreateParams = {
  game: GameEntity
  manager: EntityManager
}

export const TreesRepository = appDataSource.getRepository(TreeEntity).extend({
  async createAndSave(params: TreeCreateParams): Promise<TreeEntity> {
    const tree = new TreeEntity()
    tree.game = params.game
    // tree.fieldCells = []
    await params.manager.save(tree)
    return tree
  },

  async getById(query: any): Promise<any> {
    const tree = await this.findBy({ id: query.id })
    return tree
  },
})
