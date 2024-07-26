import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import * as joint from 'jointjs';
import { SharedDataService } from "../../../shared/services/shared-data.service";
import * as go from 'gojs';

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

  ngAfterViewInit(): void {
    this.initDiagram();
    this.initButtons();
  }

  initDiagram(): void {
    const $ = go.GraphObject.make;

    // Create a new Diagram
    this.diagram = $(go.Diagram, this.myDiagramElement.nativeElement, {
      'undoManager.isEnabled': true, // Enable undo and redo
      'clickCreatingTool.archetypeNodeData': { text: 'New Class', attributes: [] },
      'ModelChanged': (e) => console.log('Model changed:', e) // Log changes
    });

    // Define the node template for classes
    this.diagram.nodeTemplate = $(
      go.Node,
      'Auto',
      {
        locationSpot: go.Spot.Center,
        selectionAdorned: false,
        resizable: true
      },
      $(
        go.Shape,
        'Rectangle',
        {
          strokeWidth: 0,
          fill: 'lightblue',
          portId: '',
          fromLinkable: true,
          toLinkable: true
        }
      ),
      $(
        go.Panel,
        'Vertical',
        $(
          go.TextBlock,
          {
            font: 'bold 14px sans-serif',
            margin: 5,
            editable: true,
            text: 'Class Name'
          },
          new go.Binding('text', 'text').makeTwoWay()
        ),
        $(
          go.TextBlock,
          {
            font: '12px sans-serif',
            margin: 5,
            editable: true
          },
          new go.Binding('text', 'attributes', (attributes) => attributes.join('\n')).makeTwoWay()
        )
      )
    );

    // Define the link template for connections between classes
    this.diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(
        go.Shape,
        { strokeWidth: 2, stroke: 'black' }
      ),
      $(
        go.Shape,
        { toArrow: 'standard', stroke: null }
      )
    );

    // Set the diagram model with example data
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
  initButtons(): void {
    const button = this.addClassButtonElement.nativeElement as HTMLButtonElement;
    button.addEventListener('click', () => this.addClassNode());
  }

  addClassNode(): void {
    const newClassData = { text: 'New Class', attributes: [] };
    const model = this.diagram.model as go.GraphLinksModel;
    const newKey = (model.nodeDataArray.length + 1).toString();
    model.addNodeData({ ...newClassData, key: newKey });
  }
}
