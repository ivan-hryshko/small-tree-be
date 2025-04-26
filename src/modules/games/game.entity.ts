import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm"
import { FieldEntity } from "../fields/fields.entity"

@Entity({ name: "games" })
export class GameEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  status: string

  @OneToOne(() => FieldEntity, (field) => field.game)
  field: FieldEntity;
}