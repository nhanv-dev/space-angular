import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SharedDataService } from "../../../shared/services/shared-data.service";

@Component({
    templateUrl: './project-management.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class ProjectManagementComponent {
    project!: Project;
    workspaceId: string | null = '';
    projectId: string | null = '';

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private sharedDataService: SharedDataService
    ) {
        this.sharedDataService.setBreadcrumb(
            { label: 'Quản lý dự án' },
            { label: 'Main Workspace' },
            { label: 'Dự án Spotify' },
        )
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            this.workspaceId = params.get('workspace');
            this.projectId = params.get('project');
            if (!this.workspaceId) this.router.navigate(['/main/project/main-workspace'])
        });

        this.project = {
            projectId: '1',
            projectName: 'Dự án Spotify',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, veritatis eius. Error possimus enim quam, similique cupiditate iste odit, minus fugit mollitia est fuga suscipit cum vel sapiente! Reprehenderit, totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, veritatis eius. Error possimus enim quam, similique cupiditate iste odit, minus fugit mollitia est fuga suscipit cum vel sapiente! Reprehenderit, totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, veritatis eius. Error possimus enim quam, similique cupiditate iste odit, minus fugit mollitia est fuga suscipit cum vel sapiente! Reprehenderit, totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, veritatis eius. Error possimus enim quam, similique cupiditate iste odit, minus fugit mollitia est fuga suscipit cum vel sapiente! Reprehenderit, totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, veritatis eius. Error possimus enim quam, similique cupiditate iste odit, minus fugit mollitia est fuga suscipit cum vel sapiente! Reprehenderit, totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, veritatis eius. Error possimus enim quam, similique cupiditate iste odit, minus fugit mollitia est fuga suscipit cum vel sapiente! Reprehenderit, totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, veritatis eius. Error possimus enim quam, similique cupiditate iste odit, minus fugit mollitia est fuga suscipit cum vel sapiente! Reprehenderit, totam?',
            icon: 'fa-solid fa-tree',
            backgroundImage: 'https://images.unsplash.com/photo-1722939218986-a12ce21ac482?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            isFavorite: false,
            tags: [
                { title: 'Design System', slug: 'design-system' },
                { title: 'UI/UX Design', slug: 'design-system' },
                { title: 'IT', slug: 'design-system' },
                { title: 'Interface', slug: 'design-system' },
                { title: 'Intergration', slug: 'design-system' },
            ],
            assignees: [
                {
                    userId: '1', fullName: 'Trần Thanh Nhân', slug: 'tran-thanh-nhan',
                    avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                }
            ],
            dueDateFrom: new Date(),
            dueDateTo: new Date(),
        }
    }
}

interface Project {
    projectId: string;
    projectName: string;
    description?: string;
    icon?: string;
    backgroundImage: string;
    isFavorite?: boolean;
    tags?: ProjectTag[];
    assignees?: ProjectAssignees[];
    priority?: string;
    dueDateFrom?: Date;
    dueDateTo?: Date;
}

interface ProjectTag {
    title: string;
    slug: string;
    color?: string;
}

interface ProjectAssignees {
    userId: string;
    avatar: string;
    fullName: string;
    slug: string;
}
