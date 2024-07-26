import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultModule { }
