import { EntityManager } from 'typeorm'
import { GameEntity } from '../games/game.entity'
import { TreesRepository } from './trees.repository'
import { TreeEntity } from './trees.entity'

export class TreesService {
  static async create(manager: EntityManager, params : {game: GameEntity}) {
    // check game exist
    // const game =
    const tree = await TreesRepository.createAndSave({ manager, game: params.game })
    return tree
  }

  static async createTreesWithCells(
    manager: EntityManager,
    game: GameEntity,
    treeCount: number
  ): Promise<void> {
    const params = {
      game,
      treeCount,
    }

    for (let i = 0; i < params.treeCount; i++) {
      const tree = this.create(manager, { game })

    }

    // await manager.save(trees);
    // const trees = await TreesRepository.createTreesWithCells(manager, params)
  }

  static async createTreeFirstCell(manager: EntityManager, params : {tree: TreeEntity}) {

  }
}