import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { GameEntity } from "../games/game.entity"

@Entity({ name: "fields" })
export class FieldEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'integer', nullable: false, default: 20 })
  width: number

  @Column({ type: 'integer', nullable: false, default: 10 })
  height: number

  @OneToOne(() => GameEntity, (game) => game.field)
  @JoinColumn()
  game: GameEntity

  get area(): number {
    return this.width * this.height
  }
  getDescription(): string {
    return `This is a field with height: ${this.height} and width: ${this.width}`;
  }
}