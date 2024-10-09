import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectRoutingComponent } from './project-routing.module';
import { ProjectTableComponent } from './project-management/project-table/project-table.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,  
        ProjectRoutingComponent,
    ],
    declarations: [
        ProjectManagementComponent,
        ProjectDetailComponent,
        ProjectTableComponent,
    ],
    exports: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectModule { }
