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
      { title: 'Dự án', link: '/main/home', icon: '<i class="fa-solid fa-house"></i>' },
      { title: 'Việc cần làm', link: '/main/home', icon: 'fa fa-solid fa-house' },
      { title: 'Diagram', link: '/main/diagram', icon: 'fa-solid fa-diagram-project' },
    ]
  }

  ngOnInit(): void {
  }

}
