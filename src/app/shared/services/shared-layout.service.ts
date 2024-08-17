import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedLayoutService {
    private isExpandSidebar = new BehaviorSubject<boolean>(true);

    isExpandSidebar$ = this.isExpandSidebar.asObservable();

    expandSidebar(isExpand: boolean): void {
        this.isExpandSidebar.next(isExpand);
    }
} 