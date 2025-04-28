import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from "typeorm"
import { FieldEntity } from "../fields/fields.entity"
import { TreeEntity } from "../trees/trees.entity";

@Entity({ name: "games" })
export class GameEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  status: string

  @OneToOne(() => FieldEntity, (field) => field.game)
  field: FieldEntity;

  @OneToMany(() => TreeEntity, (tree) => tree.game)
  trees: TreeEntity[]
}