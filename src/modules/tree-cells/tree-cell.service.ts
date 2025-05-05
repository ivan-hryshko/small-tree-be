import { TreesRepository } from "../trees/trees.repository";
import { treeCellsRepository } from "./tree-cell.repository";


export class TreeCellService {
  static async create(params: any) {
    const tree = await TreesRepository.findOne({ where: { id: params.treeId } });
    console.log('tree :>> ', tree);
    if (!tree) {
      throw new Error('Tree not found');
    }

    // const existingCell = await treeCellsRepository.findOne({ where: { tree, x: params.x, y: params.y } });
    // console.log('existingCell :>> ', existingCell);
    // if (existingCell) {
    //   throw new Error('A cell with the same coordinates already exists for this tree');
    // }фів

    const treeCell = await treeCellsRepository.createAndSave({ tree, fieldCell: params.fieldCell });
    console.log('treeCell :>> ', treeCell);
    return treeCell
  }
}