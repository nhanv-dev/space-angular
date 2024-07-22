export interface IDiagramTable {
    //SECTION Fields
    tableId: string;
    tableName: string;
    tableDescription: string | null;
    createdAt: Date;
    createdBy: string;
    lastModifiedAt: Date;
    lastModifiedBy: string;
    isDraggable: boolean;
    isVisible: boolean;
    backgroundColor: string | null;
    fontColor: string | null;
    borderColor: string;
    refTableId: string;
    //!SECTION

    //SECTION Create Element HTML

    //!SECTION


}
