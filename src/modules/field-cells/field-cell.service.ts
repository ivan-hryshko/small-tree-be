import { FieldsRepository } from "../fields/fields.repository";
import { fieldCellsRepository } from "./field-cell.repository";

export class FieldCellService {
  static async create(params: any) {
    const field = await FieldsRepository.findOne({ where: { id: params.fieldId } });
    console.log('field :>> ', field);
    if (!field) {
      throw new Error('Field not found');
    }
  
    const existingCell = await fieldCellsRepository.findOne({ where: { field, x: params.x, y: params.y } });
    console.log('existingCell :>> ', existingCell);
    if (existingCell) {
      throw new Error('A cell with the same coordinates already exists for this field');
    }
  
    const fieldCell = await fieldCellsRepository.createAndSave({ field, x: params.x, y: params.y });
    console.log('fieldCell :>> ', fieldCell);
    return fieldCell
  }
}