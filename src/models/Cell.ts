export class Cell {
  id: string;
  x: number;
  y: number;
  fieldId: number;

  constructor( x: number, y: number, fieldId: number) {
    // this.id = ;
    this.x = x;
    this.y = y;
    this.fieldId = fieldId;
    this.id = this.gerenateId();
  }

  gerenateId(): string {
    return `${this.x}_${this.y}`;
  }
}