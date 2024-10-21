import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { DefaultDashboardComponent } from './dashboard/default-dashboard.component';
import { DefaultHomeComponent } from './home/default-home.component';

const routes: Routes = [{
    path: '',
    children: [
        { path: 'profile', component: DefaultHomeComponent, data: { permission: 'Pages.Main.Default.Home' } },
        { path: 'home', component: DefaultHomeComponent, data: { permission: 'Pages.Main.Default.Home' } },
        { path: 'dashboard', component: DefaultDashboardComponent, data: { permission: 'Pages.Main.Default.Home' } },
        { path: '', redirectTo: 'profile', pathMatch: 'full' },
        { path: '**', redirectTo: 'profile', pathMatch: 'prefix' },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DefaultRoutingModule {

    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                window.scroll(0, 0);
            }
        });
    }
}
