import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedLayoutService } from './../../../shared/services/shared-layout.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, NgClass, NgIf, NgFor, NgClass, NgTemplateOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isExpand!: boolean;
  staticList: RouterLink[] = [];
  regions: RouterLink[] = [];
  routers: RouterLink[] = [];
  activeRegion: RouterLink | null = null;
  activeRouter: RouterLink | null = null;

  constructor(private sharedLayoutService: SharedLayoutService) {
    this.staticList = [
      { routerId: '1', routerType: 'region', routerLink: '/main/person', routerIcon: 'assets/icons/svg/home.svg', routerName: 'isomorphic', className: 'medium-icon' },
      { routerParent: '1', routerId: '1.1', routerType: 'page', routerLink: '/main/person/profile', routerIcon: 'assets/icons/svg/user.svg', routerName: 'My profile', className: 'medium-icon' },
      { routerParent: '1', routerId: '1.2', routerType: 'page', routerLink: '/main/person/message', routerIcon: 'assets/icons/svg/inbox.svg', routerName: 'Inbox', className: 'medium-icon' },
      { routerParent: '1', routerId: '1.3', routerType: 'page', routerLink: '/main/person/notification', routerIcon: 'assets/icons/svg/notification.svg', routerName: 'Notification', className: 'medium-icon' },
      { routerParent: '1', routerId: '1.6', routerType: 'page', routerLink: '/main/person/social-media', routerIcon: 'assets/icons/svg/social-media.svg', routerName: 'Social media', className: 'medium-icon' },

      { routerParent: '1.6', routerId: '1.6.1', routerType: 'page', routerLink: '/main/person/social-media/instagram', routerIcon: 'assets/icons/svg/instagram.svg', routerName: 'Instagram', className: 'medium-icon' },
      { routerParent: '1.6', routerId: '1.6.2', routerType: 'page', routerLink: '/main/person/social-media/twitter', routerIcon: 'assets/icons/svg/twitter.svg', routerName: 'Twitter', className: 'medium-icon' },
      { routerParent: '1.6', routerId: '1.6.3', routerType: 'page', routerLink: '/main/person/social-media/facebook', routerIcon: 'assets/icons/svg/facebook.svg', routerName: 'Facebook', className: 'medium-icon' },
      { routerParent: '1.6', routerId: '1.6.4', routerType: 'page', routerLink: '/main/person/social-media/linkedin', routerIcon: 'assets/icons/svg/linkedin.svg', routerName: 'Linkedin', className: 'medium-icon' },
      { routerParent: '1.6', routerId: '1.6.5', routerType: 'page', routerLink: '/main/person/social-media/youtube', routerIcon: 'assets/icons/svg/youtube.svg', routerName: 'Youtube', className: 'medium-icon' },
      { routerParent: '1.6', routerId: '1.6.6', routerType: 'page', routerLink: '/main/person/social-media/tiktok', routerIcon: 'assets/icons/svg/tiktok.svg', routerName: 'Tiktok', className: 'medium-icon' },
 
      { routerParent: '1', routerId: '1.5', routerType: 'page', routerLink: '/main/person/intergration', routerIcon: 'assets/icons/svg/intergration.svg', routerName: 'Integration', className: 'medium-icon' },
      { routerParent: '1', routerId: '1.4', routerType: 'page', routerLink: '/main/person/setting', routerIcon: 'assets/icons/svg/setting.svg', routerName: 'Setting', className: 'medium-icon' },

      { routerId: '2', routerType: 'region', routerLink: '/main/workspace', routerIcon: 'assets/icons/svg/workspace.svg', routerName: 'Workspace', className: 'large-icon' },
      { routerParent: '2', routerId: '2.1', routerType: 'page', routerLink: '/main/integrations', routerIcon: 'fa-solid fa-network-wired', routerName: 'Quản lý workspace', className: 'medium-icon' },
      { routerParent: '2', routerId: '2.2', routerType: 'page', routerLink: '/main/maintance', routerIcon: 'fa-solid fa-screwdriver-wrench', routerName: 'Bảo trì', className: 'medium-icon' },
      { routerParent: '2', routerId: '2.3', routerType: 'page', routerLink: '/main/workspaces', routerIcon: 'fa-solid fa-list-ul', routerName: 'Quản lý dự án', className: 'medium-icon' },

      { routerId: '3', routerType: 'region', routerLink: '/main/database', routerIcon: 'assets/icons/svg/chart.svg', routerName: 'Database', className: 'medium-icon' },
      { routerParent: '3', routerId: '3.1', routerType: 'page', routerLink: '/main/project/calendar', routerIcon: 'fa-solid fa-calendar', routerName: 'Bảo trì', className: 'medium-icon' },
      { routerParent: '3', routerId: '3.2', routerType: 'page', routerLink: '/main/project/dashboard', routerIcon: 'fa-solid fa-chart-pie', routerName: 'Thống kê', className: 'medium-icon' },
      { routerParent: '3', routerId: '3.3', routerType: 'page', routerLink: '/main/dashboard', routerIcon: 'fa-solid fa-chart-pie', routerName: 'Dashboard', className: 'medium-icon' },

      { routerId: '4', routerType: 'region', routerLink: '/main/file-system', routerIcon: 'assets/icons/svg/file-system.svg', routerName: 'File System', className: 'small-icon' },
      { routerParent: '4', routerId: '4.1', routerType: 'page', routerLink: '/main/file-management', routerIcon: 'fa-regular fa-folder', routerName: 'Quản lý file', className: 'medium-icon' },
      { routerParent: '4', routerId: '4.2', routerType: 'page', routerLink: '/main/database/diagram', routerIcon: 'fa-solid fa-database', routerName: 'Quản lý Database', className: 'medium-icon' },
      { routerParent: '4', routerId: '4.3', routerType: 'page', routerLink: '/main/database/script-generator', routerIcon: 'fa-solid fa-database', routerName: 'Tạo script', className: 'medium-icon' },

      { routerId: '5', routerType: 'region', routerLink: '/main/app-setting', routerIcon: 'assets/icons/svg/app-setting.svg', routerName: 'Công cụ', className: 'small-icon' },
      { routerParent: '5', routerId: '5.1', routerType: 'page', routerLink: '/main/file-management', routerIcon: 'fa-regular fa-folder', routerName: 'Quản lý file', className: 'medium-icon' },
      { routerParent: '5', routerId: '5.2', routerType: 'page', routerLink: '/main/database/diagram', routerIcon: 'fa-solid fa-database', routerName: 'Quản lý Database', className: 'medium-icon' },
      { routerParent: '5', routerId: '5.3', routerType: 'page', routerLink: '/main/database/script-generator', routerIcon: 'fa-solid fa-database', routerName: 'Tạo script', className: 'medium-icon' },
    ];

    this.staticList = this.nestRouters(this.staticList);
    console.log(this.staticList);

    this.regions = this.staticList.filter(router => router.routerType === 'region');
    this.activeRegion = this.regions[0];
    this.routers = this.activeRegion.routers || [];
  }


  // Hàm nhóm routers con vào parent
  nestRouters(routers: RouterLink[]) {
    const routerMap: { [key: string]: RouterLink } = {};
    const rootRouters: RouterLink[] = [];

    // Lưu trữ tất cả routers theo routerId
    routers.forEach(router => {
      if (router.routerId) routerMap[router.routerId] = { ...router, routers: [] };
    });

    // Gắn router con vào router cha
    routers.forEach(router => {
      if (router.routerId) {
        if (router.routerParent) {
          if (routerMap[router.routerParent]) {
            if (!routerMap[router.routerParent].routers) {
              routerMap[router.routerParent].routers = [];
            }
            routerMap[router.routerParent].routers?.push(routerMap[router.routerId]);
          }
        } else {
          rootRouters.push(routerMap[router.routerId]);
        }
      }
    });

    return rootRouters;
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

  handleChangeRegion(region: RouterLink): void {
    this.activeRegion = region;
    this.routers = region.routers || [];
  }
}

interface RouterLink {
  routerId?: string;
  routerLink?: string;
  routerName?: string;
  routerIcon?: string;
  routerType?: string;
  routerParent?: string;
  className?: string;
  routers?: RouterLink[];
}