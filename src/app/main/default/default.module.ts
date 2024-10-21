import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DefaultDashboardComponent } from './dashboard/default-dashboard.component';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultHomeComponent } from './home/default-home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,  
        DefaultRoutingModule,

    ],
    declarations: [
        DefaultHomeComponent,
        DefaultDashboardComponent,
    ],
    exports: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultModule { }
