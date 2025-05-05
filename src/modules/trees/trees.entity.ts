import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { GameEntity } from "../games/game.entity"
import { TreeCellEntity } from "../tree-cells/tree-cell.entity"

@Entity({ name: "trees" })
export class TreeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => GameEntity, (game) => game.trees, { nullable: false })
  @JoinColumn({ name: 'game_id' })
  game: GameEntity

  @OneToMany(() => TreeCellEntity, (treeCell) => treeCell.tree, { cascade: true })
  treeCells: TreeCellEntity[]
}