import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "games" })
export class GameEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  status: string
}