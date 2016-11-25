import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserListModule } from './userList.module';

import { MainComponent } from '../component/main.component';
import { UserListComponent } from '../component/userList.component';

@NgModule({
  declarations: [
    MainComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserListModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
