import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatetimeFormatPipe } from './pipes/DatetimeFormatPipe';
import { AppTabsComponent } from './components/app-tabs/app-tabs.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';

@NgModule({
  declarations: [
    DatetimeFormatPipe,
    AppTabsComponent,
    DynamicTableComponent,
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
    DynamicTableComponent,
  ]
})
export class SharedModule { }