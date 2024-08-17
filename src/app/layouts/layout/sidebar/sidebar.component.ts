import { SharedLayoutService } from './../../../shared/services/shared-layout.service';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, NgClass, NgIf, NgFor, NgClass, NgTemplateOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isExpand!: boolean;
  list: RouterLink[];

  constructor(private sharedLayoutService: SharedLayoutService) {
    this.list = [
      { groupName: 'General', routerLink: '/main/home', routerIcon: 'fa-solid fa-house', routerName: 'Trang chủ' },
      { groupName: 'General', routerLink: '/main/integrations', routerIcon: 'fa-solid fa-network-wired', routerName: 'Integrations' },
      { groupName: 'General', routerLink: '/main/maintance', routerIcon: 'fa-solid fa-screwdriver-wrench', routerName: 'Bảo trì' },
      { groupName: 'Workspace', routerLink: '/main/project', routerIcon: 'fa-solid fa-list-ul', routerName: 'Quản lý dự án' },
      { groupName: 'Workspace', routerLink: '/main/project/calendar', routerIcon: 'fa-solid fa-calendar', routerName: 'Lịch hoạt động' },
      { groupName: 'Workspace', routerLink: '/main/project/dashboard', routerIcon: 'fa-solid fa-chart-pie', routerName: 'Thống kê' },
      { groupName: 'Workspace', routerLink: '/main/dashboard', routerIcon: 'fa-solid fa-chart-pie', routerName: 'Dashboard' },
      { groupName: 'System', routerLink: '/main/file-management', routerIcon: 'fa-regular fa-folder', routerName: 'Quản lý file' },
      { groupName: 'Database', routerLink: '/main/database/diagram', routerIcon: 'fa-solid fa-database', routerName: 'Quản lý Database' },
      { groupName: 'Database', routerLink: '/main/database/script-generator', routerIcon: 'fa-solid fa-database', routerName: 'Tạo script' },
      { groupName: 'System', routerLink: '/main/app/music', routerIcon: 'fa-solid fa-database', routerName: 'Music' },
      { groupName: 'System', routerLink: '/main/app/video', routerIcon: 'fa-solid fa-database', routerName: 'Video' },
    ]
  }

  ngOnInit(): void {
    this.sharedLayoutService.isExpandSidebar$.subscribe(isExpand => {
      this.isExpand = isExpand;
    });
  }

  handleToggleExpand(): void {
    this.isExpand = !this.isExpand;
    this.sharedLayoutService.expandSidebar(this.isExpand);
  }

  handleOpenMenu(event: Event): void {
    const element = event.target as HTMLElement;
    const buttonElement = element.closest('.app-layout__sidebar__item') as HTMLElement;
    buttonElement.classList.toggle('expand');
  }

  isActiveRouter(router: RouterLink): boolean {
    return true;
  }
}

interface RouterLink {
  routerLink?: string;
  routerName?: string;
  routerIcon?: string;
  groupName?: string;
  subRouter?: RouterLink[];
}