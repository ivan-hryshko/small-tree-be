import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToOne } from "typeorm"
import { TreeEntity } from "../trees/trees.entity"
import { FieldCellEntity } from "../field-cells/field-cell.entity"

@Entity({ name: "tree_cells" })
export class TreeCellEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => TreeEntity, (tree) => tree.treeCells)
  @JoinColumn({ name: 'tree_id' })
  tree: TreeEntity

  @OneToOne(() => FieldCellEntity, (fieldCell) => fieldCell.treeCell)
  @JoinColumn({ name: 'field_cell_id' })
  fieldCell: FieldCellEntity;
}