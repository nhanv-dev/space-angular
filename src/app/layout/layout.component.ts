import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskBarComponent } from './taskbar/taskbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ 
    SidebarComponent,
    TaskBarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
