import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss'
})
export class TaskBarComponent implements OnInit {

  list: any[];

  constructor() {
    this.list = [
      { title: 'Project', link: '/main/home', icon: 'fa-solid fa-bars-progress' },
      { title: 'Blog', link: '/main/home', icon: 'fa-solid fa-blog' },
      { title: 'Calendar', link: '/main/home', icon: 'fa-regular fa-calendar' },
      { title: 'Diagram', link: '/main/diagram', icon: 'fa-solid fa-database' },
    ]
  }

  ngOnInit(): void {
  }

} 