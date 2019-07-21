import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [
    UserComponent, 
    ViewUsersComponent, 
    CreateUsersComponent, 
    UpdateUsersComponent, 
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
