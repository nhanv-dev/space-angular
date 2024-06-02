import { NgModule } from '@angular/core';
import { DiagramModule } from './diagram/diagram.module';
import { MainRoutingModule } from './main-routing.module';
import { DefaultModule } from './default/default.module';
@NgModule({
  imports: [
    DefaultModule,
    DiagramModule,
    MainRoutingModule,
  ],
  declarations: [],
  providers: []
})
export class MainModule { }
