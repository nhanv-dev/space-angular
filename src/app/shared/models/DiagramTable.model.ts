import { IDiagramTable } from "../interfaces/DiagramCommon.interface";

 
export class DiagramTable implements IDiagramTable {
  constructor(
    public tableId: string,
    public tableName: string,
    public tableDescription: string | null,
    public createdAt: Date,
    public createdBy: string,
    public lastModifiedAt: Date,
    public lastModifiedBy: string,
    public isDraggable: boolean,
    public isVisible: boolean,
    public backgroundColor: string | null,
    public fontColor: string | null,
    public borderColor: string,
    public diagramId1: string,
    public refTableId: string
  ) {}
}
