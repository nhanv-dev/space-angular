import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, NgClass, NgIf, NgTemplateOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isExtend: boolean = true;

  handleToggleExpand() {
    this.isExtend = !this.isExtend;
  }

  handleOpenMenu(event: Event) {
    const element = event.target as HTMLElement;
    const buttonElement = element.closest('.app-layout__sidebar__item') as HTMLElement;
    buttonElement.classList.toggle('expand');
  }
}
