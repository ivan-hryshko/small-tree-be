import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import { GameEntity } from "../games/game.entity"

@Entity({ name: "trees" })
export class TreeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => GameEntity, (game) => game.trees, { nullable: false })
  @JoinColumn({ name: 'game_id' })
  game: GameEntity
}