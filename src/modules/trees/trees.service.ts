import { EntityManager } from 'typeorm'
import { GameEntity } from '../games/game.entity'
import { TreesRepository } from './trees.repository'

export class TreesService {
  static async create(params : { manager: EntityManager, game: GameEntity}) {
    // check game exist
    // const game =
    const tree = await TreesRepository.createAndSave({ manager: params.manager, game: params.game })
    return
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
    const trees = await TreesRepository.createTreesWithCells(manager, params)
  }
}