import { Component } from '@angular/core';

import { UserListComponent } from './userList.component';

@Component({
  selector: 'main-root',
  templateUrl: '../html/main.component.html',
  styleUrls: ['../css/main.component.css'],
})
export class MainComponent {
  title:string = 'Welcome!';
}
