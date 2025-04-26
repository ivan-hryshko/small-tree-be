import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { GameEntity } from "../games/game.entity"

@Entity({ name: "fields" })
export class FieldEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => GameEntity)
  @JoinColumn()
  game: GameEntity
}