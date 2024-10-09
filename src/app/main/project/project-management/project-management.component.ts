import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SharedDataService } from "../../../shared/services/shared-data.service";
import { ProjectDataService } from "../../../shared/services/project-data.service";

@Component({
    templateUrl: './project-management.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class ProjectManagementComponent {
    projects!: Project[];
    workspaceId: string | null = '';
    projectId: string | null = '';

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private projectDataRoute: ProjectDataService,
        private sharedDataService: SharedDataService
    ) {
        this.sharedDataService.setBreadcrumb({ label: 'Quản lý dự án' })
    }
    log(value: any) {
        console.log(value)
    }
    ngOnInit(): void {


        this.projects = [
            {
                projectId: '1',
                projectName: 'Dự án Spotify',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, veritatis eius...',
                icon: 'fa-solid fa-tree',
                backgroundImage: 'https://images.unsplash.com/photo-1722939218986-a12ce21ac482?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                isFavorite: false,
                tags: [
                    { typeColor: 'success', title: 'Design System', slug: 'design-system' },
                    { typeColor: 'warning', title: 'UI/UX Design', slug: 'ui-ux-design' },
                    { typeColor: 'info', title: 'IT', slug: 'it' },
                    { typeColor: 'success', title: 'Interface', slug: 'interface' },
                    { typeColor: 'danger', title: 'Integration', slug: 'integration' },
                ],
                assignees: [
                    {
                        userId: '1', fullName: 'Trần Thanh Nhân', slug: 'tran-thanh-nhan',
                        avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                    }
                ],
                dueDateFrom: new Date(),
                dueDateTo: new Date(),
                workspaceId: '1',
                workspaceName: 'Main Workspace',
                workspaceLink: 'main-workspace',
            },
            {
                projectId: '2',
                projectName: 'Dự án Netflix',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempora corporis...',
                icon: 'fa-solid fa-film',
                backgroundImage: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                isFavorite: true,
                tags: [
                    { typeColor: 'danger', title: 'Streaming', slug: 'streaming' },
                    { typeColor: 'success', title: 'Content Creation', slug: 'content-creation' },
                    { typeColor: 'info', title: 'Media', slug: 'media' },
                ],
                assignees: [
                    {
                        userId: '2', fullName: 'Nguyễn Văn A', slug: 'nguyen-van-a',
                        avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                    }
                ],
                dueDateFrom: new Date(),
                dueDateTo: new Date(),
                workspaceId: '2',
                workspaceName: 'Video Workspace',
                workspaceLink: 'video-workspace',
            },
            {
                projectId: '3',
                projectName: 'Dự án Amazon',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem...',
                icon: 'fa-solid fa-shopping-cart',
                backgroundImage: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                isFavorite: false,
                tags: [
                    { typeColor: 'warning', title: 'E-Commerce', slug: 'e-commerce' },
                    { typeColor: 'info', title: 'Retail', slug: 'retail' },
                    { typeColor: 'success', title: 'Logistics', slug: 'logistics' },
                ],
                assignees: [
                    {
                        userId: '3', fullName: 'Lê Thị B', slug: 'le-thi-b',
                        avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                    }
                ],
                dueDateFrom: new Date(),
                dueDateTo: new Date(),
                workspaceId: '3',
                workspaceName: 'Retail Workspace',
                workspaceLink: 'retail-workspace',
            },
            {
                projectId: '4',
                projectName: 'Dự án Facebook',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptates...',
                icon: 'fa-solid fa-users',
                backgroundImage: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                isFavorite: true,
                tags: [
                    { typeColor: 'info', title: 'Social Media', slug: 'social-media' },
                    { typeColor: 'success', title: 'Networking', slug: 'networking' },
                    { typeColor: 'danger', title: 'Advertising', slug: 'advertising' },
                ],
                assignees: [
                    {
                        userId: '4', fullName: 'Phạm Văn C', slug: 'pham-van-c',
                        avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                    }
                ],
                dueDateFrom: new Date(),
                dueDateTo: new Date(),
                workspaceId: '4',
                workspaceName: 'Social Workspace',
                workspaceLink: 'social-workspace',
            },
            {
                projectId: '5',
                projectName: 'Dự án Google',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, fuga...',
                icon: 'fa-solid fa-search',
                backgroundImage: 'https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                isFavorite: false,
                tags: [
                    { typeColor: 'info', title: 'Search Engine', slug: 'search-engine' },
                    { typeColor: 'success', title: 'Data', slug: 'data' },
                    { typeColor: 'warning', title: 'Cloud', slug: 'cloud' },
                ],
                assignees: [
                    {
                        userId: '5', fullName: 'Đặng Thị D', slug: 'dang-thi-d',
                        avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                    }
                ],
                dueDateFrom: new Date(),
                dueDateTo: new Date(),
                workspaceId: '5',
                workspaceName: 'Search Workspace',
                workspaceLink: 'search-workspace',
            },
            {
                projectId: '6',
                projectName: 'Dự án Microsoft',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, labore...',
                icon: 'fa-solid fa-laptop',
                backgroundImage: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                isFavorite: true,
                tags: [
                    { typeColor: 'success', title: 'Software', slug: 'software' },
                    { typeColor: 'info', title: 'Development', slug: 'development' },
                    { typeColor: 'danger', title: 'Technology', slug: 'technology' },
                ],
                assignees: [
                    {
                        userId: '6', fullName: 'Lý Văn E', slug: 'ly-van-e',
                        avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                    }
                ],
                dueDateFrom: new Date(),
                dueDateTo: new Date(),
                workspaceId: '6',
                workspaceName: 'Tech Workspace',
                workspaceLink: 'tech-workspace',
            },
            {
                projectId: '7',
                projectName: 'Dự án Apple',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ratione...',
                icon: 'fa-solid fa-mobile-alt',
                backgroundImage: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                isFavorite: false,
                tags: [
                    { typeColor: 'danger', title: 'Hardware', slug: 'hardware' },
                    { typeColor: 'info', title: 'Design', slug: 'design' },
                    { typeColor: 'success', title: 'Innovation', slug: 'innovation' },
                ],
                assignees: [
                    {
                        userId: '7', fullName: 'Vũ Thị F', slug: 'vu-thi-f',
                        avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                    }
                ],
                dueDateFrom: new Date(),
                dueDateTo: new Date(),
                workspaceId: '7',
                workspaceName: 'Design Workspace',
                workspaceLink: 'design-workspace',
            },
            {
                projectId: '8',
                projectName: 'Dự án Tesla',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatem...',
                icon: 'fa-solid fa-car',
                backgroundImage: 'https://images.unsplash.com/photo-1511381939415-b85f7ebdf96a?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                isFavorite: true,
                tags: [
                    { typeColor: 'info', title: 'Electric Cars', slug: 'electric-cars' },
                    { typeColor: 'success', title: 'Innovation', slug: 'innovation' },
                    { typeColor: 'danger', title: 'Automotive', slug: 'automotive' },
                ],
                assignees: [
                    {
                        userId: '8', fullName: 'Hoàng Văn G', slug: 'hoang-van-g',
                        avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                    }
                ],
                dueDateFrom: new Date(),
                dueDateTo: new Date(),
                workspaceId: '8',
                workspaceName: 'Auto Workspace',
                workspaceLink: 'auto-workspace',
            },
            {
                projectId: '9',
                projectName: 'Dự án SpaceX',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, error...',
                icon: 'fa-solid fa-rocket',
                backgroundImage: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                isFavorite: false,
                tags: [
                    { typeColor: 'info', title: 'Aerospace', slug: 'aerospace' },
                    { typeColor: 'danger', title: 'Engineering', slug: 'engineering' },
                    { typeColor: 'success', title: 'Innovation', slug: 'innovation' },
                ],
                assignees: [
                    {
                        userId: '9', fullName: 'Nguyễn Văn H', slug: 'nguyen-van-h',
                        avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                    }
                ],
                dueDateFrom: new Date(),
                dueDateTo: new Date(),
                workspaceId: '9',
                workspaceName: 'Space Workspace',
                workspaceLink: 'space-workspace',
            },
            {
                projectId: '10',
                projectName: 'Dự án Adobe',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem...',
                icon: 'fa-solid fa-palette',
                backgroundImage: 'https://images.unsplash.com/photo-1544790153-38e90d5303f4?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                isFavorite: true,
                tags: [
                    { typeColor: 'info', title: 'Creative', slug: 'creative' },
                    { typeColor: 'success', title: 'Design', slug: 'design' },
                    { typeColor: 'danger', title: 'Software', slug: 'software' },
                ],
                assignees: [
                    {
                        userId: '10', fullName: 'Trịnh Văn I', slug: 'trinh-van-i',
                        avatar: 'https://cdn.dribbble.com/users/2671670/avatars/small/f441922cc3d7e63637d15a8c415e5cf9.png?1640168146',
                    }
                ],
                dueDateFrom: new Date(),
                dueDateTo: new Date(),
                workspaceId: '10',
                workspaceName: 'Creative Workspace',
                workspaceLink: 'creative-workspace',
            }
        ];

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
    workspaceId?: string;
    workspaceName?: string;
    workspaceLink?: string;
}

interface ProjectTag {
    title: string;
    slug: string;
    typeColor?: string;
}

interface ProjectAssignees {
    userId: string;
    avatar: string;
    fullName: string;
    slug: string;
}
