import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IWorkspace } from '../../../shared/interfaces/Workspace.interface';
import { ProjectDataService } from '../../../shared/services/project-data.service';
import { SharedLayoutService } from '../../../shared/services/shared-layout.service';
import { IProject } from '../../../shared/interfaces/Project.interface';

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
  workspace!: IWorkspace | undefined;
  projects!: IProject[];
  workspaces!: IWorkspace[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectDataService: ProjectDataService,
    private sharedLayoutService: SharedLayoutService
  ) {

    this.projects = [
      { workspace: 'workspace', link: 'spotify', name: 'Dự án Spotify', icon: 'fa-regular fa-file-lines' },
      { workspace: 'workspace', link: 'realtime', name: 'Dự án Realtime', icon: 'fa-regular fa-file-lines', isFavorite: true },
      { workspace: 'workspace', link: 'chatbot', name: 'Dự án Chatbot', icon: 'fa-regular fa-file-lines' },
      { workspace: 'workspace', link: 'workspace', name: 'Dự án Workspace', icon: 'fa-regular fa-file-lines', isFavorite: true },
      { workspace: 'workspace', link: 'optimize', name: 'Dự án Optimize', icon: 'fa-regular fa-file-lines' },
    ];
  }

  ngOnInit(): void {
    if (!this.workspaces) this.projectDataService.getAllWorkspace();
    this.projectDataService.workspaces$.subscribe((workspaces) => {
      this.workspaces = workspaces;
      if (!this.workspace) {
        this.isActive = -1;
        this.workspace = this.workspaces[0];
      }
      console.log('Workspaces updated:', this.workspaces);
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.workspaceId = params.get('workspace');
      // console.log(this.workspaceId)
      // this.workspace = this.workspaces?.find(item => item.link == this.workspaceId);
      // console.log(this.workspaceId)
    });

    this.sharedLayoutService.isExpandSidebar$.subscribe(isExpand => {
      this.isExpand = isExpand;
    });
  }

  handleChangeWorkspace(item: IWorkspace): void {
    this.workspace = item;
    this.router.navigate(['/main/project', item.link]);
  }

  handleChangeTab(index: any): void {
    this.isActive = index;
    this.router.navigate(['/main/project/' + this.workspaceId, this.projects[index].workspace + this.projects[index].link]);
  }
}
