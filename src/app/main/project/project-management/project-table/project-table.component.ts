import { Input, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'project-table',
  templateUrl: './project-table.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ProjectTableComponent {

  @Input() list: any[] = [];

  expandList: number[] = [];

  log(value: any) {
    console.log(value)
  }

  handleToggleExpand(index: number): void {
    const element = document.getElementById('project-table__hiden-row' + index)
    const elementBtn = document.getElementById('project-table__row-button' + index)
    element?.classList.toggle('active')
    elementBtn?.classList.toggle('active')
  }
}
