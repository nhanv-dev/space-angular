import { SharedLayoutService } from '../../../shared/services/shared-layout.service';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'region-navigation',
  standalone: true,
  imports: [RouterModule, NgClass, NgIf, NgFor, NgClass, NgTemplateOutlet],
  templateUrl: './region-navigation.component.html',
  styleUrl: './region-navigation.component.scss'
})
export class RegionNavigationComponent {
  isExpand!: boolean;

  constructor(private sharedLayoutService: SharedLayoutService) {
     
  }

  ngOnInit(): void {
    this.sharedLayoutService.isExpandSidebar$.subscribe(isExpand => {
      this.isExpand = isExpand;
    });
  } 
} 