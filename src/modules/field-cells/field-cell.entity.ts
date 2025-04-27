import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, Unique } from "typeorm"
import { GameEntity } from "../games/game.entity"
import { FieldEntity } from "../fields/fields.entity"

@Entity({ name: "field_cells" })
@Unique(['field', 'x', 'y'])
export class FieldCellEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'integer', nullable: false, default: 0, })
  x: number

  @Column({ type: 'integer', nullable: false, default: 0 })
  y: number

  @ManyToOne(() => FieldEntity, (field) => field.fieldCells)
  @JoinColumn({ name: 'field_id' })
  field: FieldEntity
}