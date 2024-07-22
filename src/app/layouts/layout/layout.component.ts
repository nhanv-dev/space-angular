import { Component, ViewChild } from '@angular/core';
import { LayoutHeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskBarComponent } from './taskbar/taskbar.component';
import { NgClass } from '@angular/common';

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
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('sidebarComponent') sidebarComponent!: SidebarComponent;
}
