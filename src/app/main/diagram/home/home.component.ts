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

    // Define the node template for classes
    this.diagram.nodeTemplate = $(
      go.Node,
      'Auto',
      { locationSpot: go.Spot.Center, selectionAdorned: false, resizable: true, },
      $(go.Shape, 'Rectangle', { fromLinkable: true, toLinkable: true, css: 'diagram__shape--rectangle' }),
      $(go.Panel, 'Vertical',
        $(go.TextBlock, { editable: true, text: 'Class Name' }, new go.Binding('text', 'text').makeTwoWay()),
        $(go.TextBlock, { editable: true }, new go.Binding('text', 'attributes', (attributes) => attributes.join('\n')).makeTwoWay())
      )
    );

    // Define the link template for connections between classes
    this.diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 4 },
      $(
        go.Shape,
        { strokeWidth: 2, stroke: 'black' }
      ),
      $(
        go.Shape,
        { toArrow: 'standard', stroke: null }
      )
    );

    this.diagram.model = new go.GraphLinksModel(
      [
        { key: 1, text: 'Class 1', attributes: ['attribute1: type', 'attribute2: type'] },
        { key: 2, text: 'Class 2', attributes: ['attribute1: type'] }
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
