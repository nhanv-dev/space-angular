import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { DiagramLayoutComponent } from '../../layouts/diagram-layout/diagram-layout.component';
import { DiagramHomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'diagram',
        component: DiagramLayoutComponent,
        children: [
            { path: 'home', component: DiagramHomeComponent, data: { permission: 'Pages.Diagram.Home' }, title: 'Space - Diagram' },

        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class DiagramRoutingModule {

    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                window.scroll(0, 0);
            }
        });
    }
}
