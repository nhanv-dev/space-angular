import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DiagramRoutingModule } from './diagram-routing.module';
import { DiagramHomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        DiagramRoutingModule,
    ],
    declarations: [ 
        DiagramHomeComponent,
    ],
    exports: [

    ],
    providers: []
})
export class DiagramModule { }
