import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveComponent } from './leave.component';
import { ListLeaveComponent } from './list-leave/list-leave.component';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';

const routes: Routes = [{
  path: '',
  component: LeaveComponent,
  children: [
    {
      path: '',
      component: ListLeaveComponent
    },
    {
      path: 'create',
      component: CreateLeaveComponent
    },
    {
      path: 'update',
      component: UpdateLeaveComponent
    },
    {
      path: 'view',
      component: ViewLeaveComponent
    },
    {
      path: 'list',
      component: ListLeaveComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
