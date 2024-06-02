import { NgModule } from '@angular/core';
import { DefaultRoutingModule } from './default-routing.module'; 
import { DefaultHomeComponent } from './home/default-home.component';

@NgModule({
    imports: [
        DefaultRoutingModule,
    ],
    declarations: [
        DefaultHomeComponent,
    ],
    exports: [],
    providers: [],
})
export class DefaultModule { }
