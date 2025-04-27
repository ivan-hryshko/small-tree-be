import { Brackets } from 'typeorm'

import appDataSource from '../../config/app-data-source'
import { GameEntity } from './game.entity'

export const GamesRepository = appDataSource.getRepository(GameEntity).extend({
  async createAndSave(): Promise<GameEntity> {
    const game = new GameEntity()
    game.status = 'not_started'
    console.log('game :>> ', game);
    await this.save(game)
    return game
  },

  async getById(query: any): Promise<any> {
    const game = await this
    .createQueryBuilder('game')
    .leftJoin('game.field', 'field')
    .leftJoin('field.fieldCells', 'fieldCells')
    .addSelect('field')
    .addSelect('fieldCells')
    .where('game.id = :id', { id: query.id })
    .getOne();
    return game
  },
})
