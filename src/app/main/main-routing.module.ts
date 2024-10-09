import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    { path: '', loadChildren: () => import('./default/default.module').then(m => m.DefaultModule) },
    { path: 'diagram', loadChildren: () => import('./diagram/diagram.module').then(m => m.DiagramModule) },
    { path: 'workspaces', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
    { path: '**', redirectTo: '' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
