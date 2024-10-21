import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './app-chat.component.html',
  styleUrl: 'app-chat.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppChatComponent implements OnInit {
  groups?: Group[];

  constructor() { }

  ngOnInit(): void {
    this.groups = [
      {
        id: '1', name: 'Contacts', listChat: [
          { displayName: 'Nathan Garcia', image: 'https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg', isActive: '1' },
          { displayName: 'Nathan Garcia', image: 'https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg', isActive: '0' },
          { displayName: 'Nathan Garcia', image: 'https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg', isActive: '1' },
        ]
      },
      {
        id: '1', name: 'Groups', listChat: [
          { displayName: 'Nathan Garcia', image: 'https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg', isActive: '0' },
          { displayName: 'Nathan Garcia', image: 'https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg', isActive: '0' },
          { displayName: 'Nathan Garcia', image: 'https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg', isActive: '1' },
        ]
      }
    ]
  }

}

interface Group {
  id?: string;
  name?: string;
  listChat?: Chat[];
}

interface Chat {
  id?: string;
  displayName?: string;
  image?: string;
  isActive?: string;
}
