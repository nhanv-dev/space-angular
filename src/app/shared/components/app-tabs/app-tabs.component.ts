import { Input, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './app-tabs.component.html',
  styleUrl: 'app-tabs.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppTabsComponent {
  @Input() classButton: string = '';
  @Input() classContent: string = '';
  activeTab: number = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  isActiveTab(index: number): boolean {
    return this.activeTab === index;
  }
}
