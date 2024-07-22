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

  list: TaskBarLink[];

  constructor() {
    this.list = [
      { title: 'Go Back', link: '/main/home', icon: 'fa-solid fa-arrow-rotate-left' },
      { title: 'Project', link: '/main/home', icon: 'fa-solid fa-bars-progress' },
      { title: 'Calendar', link: '/main/home', icon: 'fa-regular fa-calendar' },
      { title: 'Diagram', link: '/main/diagram', icon: 'fa-solid fa-database' },
      { title: 'NoonPost', link: '/main/home', icon: 'fa-solid fa-blog' },
    ];
  }

  ngOnInit(): void {
  }

}

interface TaskBarLink {
  title: string,
  link: string,
  icon: string
}