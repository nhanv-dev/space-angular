import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProjectManagementComponent } from './home/project-management.component';
import { ProjectRoutingComponent } from './project-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule, 
        ProjectRoutingComponent,
    ],
    declarations: [
        ProjectManagementComponent,
    ],
    exports: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectModule { }
