import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {
    private breadcrumbSource = new BehaviorSubject<BreadcrumbLink[]>([]);

    breadcrumb$ = this.breadcrumbSource.asObservable();

    setBreadcrumb(...items: BreadcrumbLink[]): void {
        console.log(items)
        this.breadcrumbSource.next(items);
    }
}

export interface BreadcrumbLink {
    label: string,
    url?: string
}