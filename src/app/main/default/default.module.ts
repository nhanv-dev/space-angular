import { NgModule } from '@angular/core';
import { DefaultDashboardComponent } from './dashboard/default-dashboard.component';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultHomeComponent } from './home/default-home.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        DefaultRoutingModule,

    ],
    declarations: [
        DefaultHomeComponent,
        DefaultDashboardComponent,
    ],
    exports: [],
    providers: [],
})
export class DefaultModule { }
