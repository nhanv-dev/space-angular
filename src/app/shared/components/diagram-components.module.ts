import { NgModule } from '@angular/core';
import { DrawingBoardComponent } from './drawing-board/drawing-board.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        DrawingBoardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DrawingBoardComponent
    ],
    providers: []
})
export class DiagramComponentsModule { }
