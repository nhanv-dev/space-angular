import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatetimeFormatPipe } from './pipes/DatetimeFormatPipe';
import { AppTabsComponent } from './components/app-tabs/app-tabs.component';

@NgModule({
  declarations: [
    DatetimeFormatPipe,
    AppTabsComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    DatePipe,
  ],
  exports: [
    DatetimeFormatPipe,
    AppTabsComponent,
  ]
})
export class SharedModule { }