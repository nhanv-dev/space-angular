import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { DefaultHomeComponent } from './home/default-home.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home', component: DefaultHomeComponent, data: {
                    permission: 'Pages.Main.Default.Home',
                    nav:'123'
                }
            },
            { path: 'project', component: DefaultHomeComponent, data: { permission: 'Pages.Main.Default.Home' } },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
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
