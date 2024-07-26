import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedLayoutService {
    private isExpandSidebar = new BehaviorSubject<boolean>(false);

    isExpandSidebar$ = this.isExpandSidebar.asObservable();

    expandSidebar(isExpand: boolean): void {
        this.isExpandSidebar.next(isExpand);
    }
} 