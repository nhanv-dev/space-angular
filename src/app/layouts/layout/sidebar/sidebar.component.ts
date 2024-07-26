import { SharedLayoutService } from './../../../shared/services/shared-layout.service';
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
  isExpand!: boolean;

  constructor(private sharedLayoutService: SharedLayoutService) { }

  ngOnInit(): void {
    this.sharedLayoutService.isExpandSidebar$.subscribe(isExpand => {
      this.isExpand = isExpand;
    });
  }
  
  handleToggleExpand() {
    this.isExpand = !this.isExpand;
    this.sharedLayoutService.expandSidebar(this.isExpand);
  }

  handleOpenMenu(event: Event) {
    const element = event.target as HTMLElement;
    const buttonElement = element.closest('.app-layout__sidebar__item') as HTMLElement;
    buttonElement.classList.toggle('expand');
  }
}
