import { Cell } from './Cell';
export class Field {
  private cells: Cell[] = [];

  constructor(rows: number, columns: number) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cell = new Cell(i * columns + j, i, j);
        this.cells.push(cell);
      }
    }
  }
}