import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "games" })
export class Game {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  status: string
}