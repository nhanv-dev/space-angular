import { NgModule } from '@angular/core';
import { DiagramRoutingModule } from './diagram-routing.module';
import { DiagramHomeComponent } from './home/home.component';

@NgModule({
    imports: [
        DiagramRoutingModule,
    ],
    declarations: [
        DiagramHomeComponent,
    ],
    exports: [],
    providers: []
})
export class DiagramModule { }
