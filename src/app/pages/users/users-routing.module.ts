import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: '',
      component: ListUsersComponent
    },
    {
      path: 'create',
      component: CreateUsersComponent
    },
    {
      path: 'update',
      component: UpdateUsersComponent
    },
    {
      path: 'view',
      component: ViewUsersComponent
    },
    {
      path: 'list',
      component: ListUsersComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
