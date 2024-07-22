import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from "@angular/core";
import { FabricService } from "../../../shared/services/fabric.service";

@Component({
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class DiagramHomeComponent {
    @ViewChild('canvas', { static: true }) canvasElement!: ElementRef<HTMLCanvasElement>;
    @ViewChild('htmlContainer', { static: true }) htmlContainer!: ElementRef<HTMLDivElement>;

    constructor(
        private fabricService: FabricService,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
        this.fabricService.initialize(this.canvasElement.nativeElement, this.renderer);
    }

    clearCanvas(): void {
        this.fabricService.clearCanvas();
    }

    private dragElement: HTMLElement | null = null;
    private offsetX: number = 0;
    private offsetY: number = 0;

    addHtmlElement(): void {
        const div = this.fabricService.addTable();
        
        this.renderer.listen(div, 'mousedown', (event) => this.onMouseDown(event, div));
        this.renderer.appendChild(this.htmlContainer.nativeElement, div);
    }

    onMouseDown(event: MouseEvent, element: HTMLElement): void {
        this.dragElement = element;
        this.offsetX = event.clientX - element.getBoundingClientRect().left;
        this.offsetY = event.clientY - element.getBoundingClientRect().top;
        this.renderer.listen('document', 'mousemove', this.onMouseMove.bind(this));
        this.renderer.listen('document', 'mouseup', this.onMouseUp.bind(this));
    }

    onMouseMove(event: MouseEvent): void {
        if (this.dragElement) {
            const canvasRect = this.canvasElement.nativeElement.getBoundingClientRect();
            const offsetX = event.clientX - this.offsetX - canvasRect.left;
            const offsetY = event.clientY - this.offsetY - canvasRect.top;

            // Update the position of the draggable element
            this.renderer.setStyle(this.dragElement, 'left', `${offsetX}px`);
            this.renderer.setStyle(this.dragElement, 'top', `${offsetY}px`);

            // Calculate new canvas width and height based on the element position
            const newWidth = offsetX + this.dragElement.offsetWidth + 10; // Add some padding
            const newHeight = offsetY + this.dragElement.offsetHeight + 10; // Add some padding

            // Set new canvas size
            this.renderer.setStyle(this.canvasElement.nativeElement, 'width', `${newWidth}px`);
            this.renderer.setStyle(this.canvasElement.nativeElement, 'height', `${newHeight}px`);
        }
    }

    onMouseUp(): void {
        this.dragElement = null;

        // Reset canvas size
        this.renderer.setStyle(this.canvasElement.nativeElement, 'width', '100%'); // Adjust as needed
        this.renderer.setStyle(this.canvasElement.nativeElement, 'height', '100%'); // Adjust as needed

    }

}
