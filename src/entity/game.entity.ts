import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "games" })
export class GameEnity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  status: string
}