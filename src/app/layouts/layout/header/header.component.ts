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
  @Input() isExtend: boolean;
  permission!: string;
  breadscrumb!: BreadcrumbLink[];

  constructor(private sharedDataService: SharedDataService) {
    this.isExtend = true
  }

  ngOnInit(): void {
    this.sharedDataService.breadcrumb$.subscribe(breadscrumb => {
      this.breadscrumb = breadscrumb;
    });
  }

  gethide(indx: number): boolean {
    console.log(indx)
    return indx < this.breadscrumb.length - 1
  }
}
