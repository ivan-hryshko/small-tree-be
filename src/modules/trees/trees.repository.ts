import { EntityManager } from 'typeorm'

import appDataSource from '../../config/app-data-source'
import { GameEntity } from '../games/game.entity'
import { TreeEntity } from './trees.entity'

type TreeCreateParams = {
  game: GameEntity
  manager: EntityManager
}
type TreeCreateManyParams = {
  game: GameEntity
  treeCount: number
}

export const TreesRepository = appDataSource.getRepository(TreeEntity).extend({
  async createAndSave(params: TreeCreateParams): Promise<TreeEntity> {
    const tree = new TreeEntity()
    tree.game = params.game
    // tree.fieldCells = []
    await params.manager.save(tree)
    return tree
  },

  async createTreesWithCells(
    manager: EntityManager,
    params: TreeCreateManyParams,
  ): Promise<void> {
    const trees: TreeEntity[] = [];

    for (let i = 0; i < params.treeCount; i++) {
      const tree = new TreeEntity()
      tree.game = params.game
      // tree.fieldCells = []
      trees.push(tree);
    }

    await manager.save(trees);

    // const treeCells: TreeCellEntity[] = [];

    for (const tree of trees) {
      // Implement your logic to create cells for each tree
      // For example:
      // for (let x = 0; x < tree.width; x++) {
      //   for (let y = 0; y < tree.height; y++) {
      //     const cell = manager.create(TreeCellEntity, {
      //       tree,
      //       x,
      //       y,
      //     });
      //     treeCells.push(cell);
      //   }
      // }
    }

    // await manager.save(treeCells);
  },

  async getById(query: any): Promise<any> {
    const tree = await this.findBy({ id: query.id })
    return tree
  },
})
