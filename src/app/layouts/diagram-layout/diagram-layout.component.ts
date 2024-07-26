import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedLayoutService } from '../../shared/services/shared-layout.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-diagram-layout',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './diagram-layout.component.html',
  styleUrl: './diagram-layout.component.scss'
})
export class DiagramLayoutComponent {

  isExpand!: boolean;

  constructor(
    private sharedLayoutService: SharedLayoutService
  ) { }

  ngOnInit(): void {
    this.sharedLayoutService.isExpandSidebar$.subscribe(isExpand => {
      this.isExpand = isExpand;
    });
  }
}
