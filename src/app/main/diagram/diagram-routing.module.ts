import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { DiagramHomeComponent } from './home/home.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';

const routes: Routes = [
    {
        path: 'diagram',
        component: MainLayoutComponent,
        children: [
            { path: 'home', component: DiagramHomeComponent, data: { permission: 'Pages.Diagram.Home' } },

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
