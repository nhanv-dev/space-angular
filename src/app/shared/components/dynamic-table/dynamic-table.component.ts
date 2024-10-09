import { Input, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrl: 'dynamic-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DynamicTableComponent {

  @Input() list: any[] = [];

  log(value: any) {
    console.log(value)
  }
}
