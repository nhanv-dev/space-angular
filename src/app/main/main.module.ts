import { NgModule } from '@angular/core';
import { DefaultModule } from './default/default.module';
import { DiagramModule } from './diagram/diagram.module';
import { MainRoutingModule } from './main-routing.module';
import { ProjectModule } from './project/project.module';

@NgModule({
  imports: [
    DefaultModule,
    DiagramModule,
    ProjectModule,
    MainRoutingModule,
  ],
  declarations: [],
  providers: []
})
export class MainModule { }
