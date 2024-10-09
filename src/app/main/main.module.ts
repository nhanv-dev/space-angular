import { NgModule } from '@angular/core';
import { LayoutComponent } from '../layouts/layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    LayoutComponent,
    MainRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
