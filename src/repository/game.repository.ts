import {postgresSource} from '../config/app-data-source'
import {GameEntity} from '../entity/game.entity'

export const GameRepository = postgresSource.getRepository(GameEntity).extend({
  async createAndSave(dto: any): Promise<GameEntity> {
    const game = new GameEntity()
    game.status = dto.status

    await this.save(game)
    return game
  },
})