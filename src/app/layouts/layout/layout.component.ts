import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutHeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskBarComponent } from './taskbar/taskbar.component';
import { NgClass } from '@angular/common';
import { SharedLayoutService } from '../../shared/services/shared-layout.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    TaskBarComponent,
    LayoutHeaderComponent,
    NgClass,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {
  isExpand: boolean = false;

  constructor(private sharedLayoutService: SharedLayoutService) {

  }

  ngOnInit(): void {
    this.sharedLayoutService.isExpandSidebar$.subscribe(isExpand => {
      this.isExpand = isExpand;
    });
  }

}
