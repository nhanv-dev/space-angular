import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SharedLayoutService } from '../../../shared/services/shared-layout.service';

@Component({
  selector: 'app-project-layout',
  standalone: true,
  imports: [RouterModule, NgClass, NgFor, NgIf],
  templateUrl: './project-layout.component.html',
  styleUrl: './project-layout.component.scss'
})
export class ProjectLayoutComponent {

  isOpenWorkspace: boolean = false;
  isExpand!: boolean;
  isActive!: number;
  workspaceId: string | null = '';
  workspace!: Workspace | undefined;
  projects!: Project[];
  workspaces!: Workspace[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sharedLayoutService: SharedLayoutService) {
    this.isActive = 0;

    this.workspaces = [
      { link: 'main-workspace', name: 'Main Workspace' },
      { link: 'support-it', name: 'Support IT' },
      { link: 'learning', name: 'Learning' },
      { link: 'program-language', name: 'Program Language' },
      { link: 'marketing', name: 'Marketing' },
    ];

    this.projects = [
      { link: 'spotify', name: 'Dự án Spotify', icon: 'fa-regular fa-file-lines' },
      { link: 'realtime', name: 'Dự án Realtime', icon: 'fa-regular fa-file-lines', isFavorite: true },
      { link: 'chatbot', name: 'Dự án Chatbot', icon: 'fa-regular fa-file-lines' },
      { link: 'workspace', name: 'Dự án Workspace', icon: 'fa-regular fa-file-lines', isFavorite: true },
      { link: 'optimize', name: 'Dự án Optimize', icon: 'fa-regular fa-file-lines' },
    ];
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.workspaceId = params.get('workspace');
      console.log(this.workspaceId)
      this.workspace = this.workspaces?.find(item => item.link == this.workspaceId);
      console.log(this.workspaceId)
    });

    this.sharedLayoutService.isExpandSidebar$.subscribe(isExpand => {
      this.isExpand = isExpand;
    });
  }

  handleChangeWorkspace(item: Workspace): void {
    this.workspace = item;
    this.router.navigate(['/main/project', item.link]);
  }
  handleChangeTab(index: any): void {
    this.isActive = index;
    this.router.navigate(['/main/project/' + this.workspaceId, this.projects[index].link]);
  }
}

interface Project {
  link: string;
  name: string;
  icon: string;
  isFavorite?: boolean;
}

interface Workspace {
  link: string;
  name: string;
}