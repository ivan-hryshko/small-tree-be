import { EntityManager } from 'typeorm'

import appDataSource from '../../config/app-data-source'
import { GameEntity } from './game.entity'

export const GamesRepository = appDataSource.getRepository(GameEntity).extend({
  async createAndSave(manager: EntityManager): Promise<GameEntity> {
    const game = new GameEntity()
    game.status = 'not_started'
    console.log('game :>> ', game);
    await manager.save(game)
    return game
  },

  async getById(query: any): Promise<any> {
    const game = await this
    .createQueryBuilder('game')
    .leftJoin('game.field', 'field')
    .leftJoin('game.trees', 'trees')
    .leftJoin('field.fieldCells', 'fieldCells')
    .addSelect('field')
    .addSelect('trees')
    .addSelect('fieldCells')
    .where('game.id = :id', { id: query.id })
    .getOne();
    return game
  },
})
