import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { ProjectLayoutComponent } from './project-layout/project-layout.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectLayoutComponent,
        children: [
            {
                path: ':workspace/:project', pathMatch: 'full', component: ProjectDetailComponent,
                data: {
                    permission: 'Pages.Main.Project.ProjectManagement',
                    animation: 'openClosePage'
                }
            },
            {
                path: ':workspace', pathMatch: 'full', component: ProjectManagementComponent,
                data: {
                    permission: 'Pages.Main.Project.ProjectManagement',
                    animation: 'openClosePage'
                }
            },
            {
                path: '', component: ProjectManagementComponent, pathMatch: 'full',
                data: {
                    permission: 'Pages.Main.Project.WorkspaceManagement',
                    animation: 'openClosePage'
                }
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class ProjectRoutingComponent {

    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                window.scroll(0, 0);
            }
        });
    }
}
