import { Component, OnInit } from '@angular/core';

import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
    selector:'user-list',
    templateUrl: '../html/userList.component.html',
})
export class UserListComponent implements OnInit{
    title:string = "User List"
    userList:User[];  

    constructor(private _userService: UserService) {}
    
    ngOnInit():void {
       this._userService.getAllUser()
           .subscribe(users => this.userList = users);
    }
}