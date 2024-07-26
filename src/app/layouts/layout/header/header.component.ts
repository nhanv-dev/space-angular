import { SharedLayoutService } from './../../../shared/services/shared-layout.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbLink, SharedDataService } from '../../../shared/services/shared-data.service';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class LayoutHeaderComponent implements OnInit {
  isExpand!: boolean;
  permission!: string;
  breadscrumb!: BreadcrumbLink[];

  constructor(
    private sharedDataService: SharedDataService,
    private sharedLayoutService: SharedLayoutService
  ) { }

  ngOnInit(): void {
    this.sharedDataService.breadcrumb$.subscribe(breadscrumb => {
      this.breadscrumb = breadscrumb;
    });
    this.sharedLayoutService.isExpandSidebar$.subscribe(isExpand => {
      this.isExpand = isExpand;
    });
  }

  gethide(indx: number): boolean {
    return indx < this.breadscrumb.length - 1;
  }
}
