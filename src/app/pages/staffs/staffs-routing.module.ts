import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';

const routes: Routes = [{
  path: '',
  component: StaffComponent,
  children: [
    {
      path: '',
      component: ListStaffComponent
    },
    {
      path: 'create',
      component: CreateStaffComponent
    },
    {
      path: 'list',
      component: ListStaffComponent
    },
    {
      path: 'update',
      component: UpdateStaffComponent
    },
    {
      path: 'view',
      component: ViewStaffComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule { }
