import { NgClass } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { SharedLayoutService } from '../../shared/services/shared-layout.service';
import { LayoutHeaderComponent } from './header/header.component';
import { RegionNavigationComponent } from './region-navigation/region-navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskBarComponent } from './taskbar/taskbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgClass,
    SidebarComponent,
    TaskBarComponent,
    LayoutHeaderComponent,
    RegionNavigationComponent
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
