import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { UserListComponent } from '../component/userList.component';
import { UserService } from '../service/user.service';

@NgModule({
    imports: [HttpModule],
    providers: [UserService],
    bootstrap: [UserListComponent]
})
export class UserListModule { }