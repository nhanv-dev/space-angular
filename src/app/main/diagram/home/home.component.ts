import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { FabricService } from "../../../shared/services/fabric.service";

@Component({
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class DiagramHomeComponent {
    @ViewChild('canvas', { static: true }) canvasElement!: ElementRef<HTMLCanvasElement>;

    constructor(private fabricService: FabricService) { }

    ngOnInit(): void {
        this.fabricService.initialize(this.canvasElement.nativeElement);
    }

    addRect(): void {
        this.fabricService.addRect();
    }

    addCircle(): void {
        this.fabricService.addCircle();
    }

    clearCanvas(): void {
        this.fabricService.clearCanvas();
    }
}
