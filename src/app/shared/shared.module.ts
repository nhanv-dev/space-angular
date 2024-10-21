import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatetimeFormatPipe } from './pipes/DatetimeFormatPipe';
import { AppTabsComponent } from './components/app-tabs/app-tabs.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { AppChatComponent } from './components/app-chat/app-chat.component';

@NgModule({
  declarations: [
    DatetimeFormatPipe,
    AppChatComponent,
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
    AppChatComponent,
    AppTabsComponent,
    DynamicTableComponent,
  ]
})
export class SharedModule { }