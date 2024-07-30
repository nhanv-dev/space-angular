import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import * as go from 'gojs';
import { SharedDataService } from "../../../shared/services/shared-data.service";

@Component({
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DiagramHomeComponent implements AfterViewInit {

  constructor(private sharedDataService: SharedDataService) {
    this.sharedDataService.setBreadcrumb(
      { label: 'Quản lý Database' },
      { label: 'Diagram' },
    )
  }

  @ViewChild('myDiagram') private myDiagramElement!: ElementRef;
  @ViewChild('addClassButton') private addClassButtonElement!: ElementRef;

  private diagram!: go.Diagram;
  private defaultNode: any = { text: 'New Class', attributes: [] }

  ngAfterViewInit(): void {
    this.initDiagram();
  }

  initDiagram(): void {
    const $ = go.GraphObject.make;

    // Create a new Diagram
    this.diagram = $(go.Diagram, this.myDiagramElement.nativeElement, {
      'undoManager.isEnabled': true,
      'clickCreatingTool.archetypeNodeData': this.defaultNode,
      'ModelChanged': (e) => console.log('Model changed:', e),
    });
    this.diagram.grid =
      new go.Panel("Grid", {
        name: "GRID",
        visible: false,
        gridCellSize: new go.Size(10, 10),
        gridOrigin: new go.Point(0, 0)
      })
        .add(
          new go.Shape("LineH", { stroke: "lightgray", strokeWidth: 0.5, interval: 1 }),
          new go.Shape("LineH", { stroke: "gray", strokeWidth: 0.5, interval: 5 }),
          new go.Shape("LineH", { stroke: "gray", strokeWidth: 1.0, interval: 10 }),
          new go.Shape("LineV", { stroke: "lightgray", strokeWidth: 0.5, interval: 1 }),
          new go.Shape("LineV", { stroke: "gray", strokeWidth: 0.5, interval: 5 }),
          new go.Shape("LineV", { stroke: "gray", strokeWidth: 1.0, interval: 10 })
        );

    this.diagram.grid.visible = true;
    if (this.diagram.div) this.diagram.div.style.background = "white";
    this.diagram.toolManager.draggingTool.isGridSnapEnabled = true;
    this.diagram.toolManager.resizingTool.isGridSnapEnabled = true;

    this.diagram.nodeTemplate =
      new go.Node("Auto", {
        locationSpot: go.Spot.Center,
        selectionAdorned: false,
        resizable: true,
      }).add(
        new go.Shape("RoundedRectangle", {
          fill: 'white',
          stroke: 'black', // Set the border color here
          strokeWidth: 2, // Set the border width here
          fromLinkable: true,
          toLinkable: true,
          parameter1: 2,
        }),
        new go.Panel("Vertical", {
          background: 'white',
          defaultAlignment: go.Spot.Left,
          padding: new go.Margin(10, 10, 10, 10),
        }).add(
          new go.TextBlock(
            {
              font: 'bold 14px sans-serif',
            }
          ).bind("text", "text"),
          new go.Panel("Table", {
            background: 'white',
            itemTemplate:
              new go.Panel("TableRow")
                .add(
                  new go.TextBlock({ column: 0, editable: true, margin: new go.Margin(4, 10, 4, 0), alignment: go.Spot.Left }).bind("text", "key"),
                  new go.TextBlock({ column: 1, editable: true, margin: new go.Margin(4, 30, 4, 0), alignment: go.Spot.Left }).bind("text", "name"),
                  new go.TextBlock({ column: 2, editable: true, margin: new go.Margin(4, 10, 4, 0), alignment: go.Spot.Left }).bind("text", "type"),
                )
          }).bind("itemArray", "attributes")
        )
      );

    this.diagram.linkTemplate = $(
      go.Link,
      { routing: go.Routing.Orthogonal, corner: 2 },
      $(go.Shape, { strokeWidth: 2, stroke: 'black' }),
      $(go.Shape, { toArrow: 'standard', stroke: null })
    );

    this.diagram.model = new go.GraphLinksModel(
      [
        {
          key: 1, text: 'Class 1', attributes: [
            { name: 'Attribute 1', type: 'string', key: 'PK' },
            { name: 'Attribute 2', type: 'number', key: 'FK' }
          ]
        },
        {
          key: 2, text: 'Class 2', attributes: [
            { name: 'Attribute 1', type: 'string', key: 'PK' },
            { name: 'Attribute 2', type: 'number', key: 'FK' }
          ]
        },
      ],
      [
        { from: 1, to: 2 }
      ]
    );
  }


  addTable(): void {
    const newClassData = { text: 'New Class', attributes: [] };
    const model = this.diagram.model as go.GraphLinksModel;
    const newKey = (model.nodeDataArray.length + 1).toString();
    model.addNodeData({ ...newClassData, key: newKey });
  }


}
