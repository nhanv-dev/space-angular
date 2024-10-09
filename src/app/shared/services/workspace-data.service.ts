import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IWorkspace } from '../interfaces/Workspace.interface';

@Injectable({
    providedIn: 'root'
})
export class ProjectDataService {
    private workspaces = new BehaviorSubject<IWorkspace[]>([]);

    workspaces$: Observable<IWorkspace[]> = this.workspaces.asObservable();

    getAllWorkspace(newWorkspaces: IWorkspace[]): void {
        this.workspaces.next([
            { link: 'main-workspace', name: 'Main Workspace' },
            { link: 'support-it', name: 'Support IT' },
            { link: 'learning', name: 'Learning' },
            { link: 'program-language', name: 'Program Language' },
            { link: 'marketing', name: 'Marketing' },
        ])
        this.workspaces.next(newWorkspaces);
    }

    addWorkspace(workspace: IWorkspace): void {
        const currentWorkspaces = this.workspaces.getValue();
        this.workspaces.next([...currentWorkspaces, workspace]);
    }

    removeWorkspace(workspaceId: string): void {
        const currentWorkspaces = this.workspaces.getValue().filter((workspace) => workspace.id !== workspaceId);
        this.workspaces.next(currentWorkspaces);
    }
}
