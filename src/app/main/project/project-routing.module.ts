import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { ProjectLayoutComponent } from './project-layout/project-layout.component';
import { ProjectManagementComponent } from './home/project-management.component';

const routes: Routes = [
    {
        path: 'project',
        component: ProjectLayoutComponent,
        children: [
            { path: ':workspace', component: ProjectManagementComponent, data: { permission: 'Pages.Main.Project.ProjectManagement' } },
            { path: ':workspace/:project', component: ProjectManagementComponent, data: { permission: 'Pages.Main.Project.ProjectManagement' } },
            { path: '', component: ProjectManagementComponent, pathMatch: 'full', data: { permission: 'Pages.Main.Project.ProjectManagement' } },
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
