import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { StartupAppComponent } from './startup-app/startup-app.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'startup', component: StartupAppComponent },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationStart') {
        document.body.classList.add('loading');
      } else if (event.constructor.name === 'NavigationEnd' || event.constructor.name === 'NavigationCancel' || event.constructor.name === 'NavigationError') {
        window.scroll(0, 0);
        document.body.classList.remove('loading');
      }
    });
  }
}