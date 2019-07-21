import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffComponent } from './staff.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';

@NgModule({
  declarations: [
    StaffComponent, 
    CreateStaffComponent,
    UpdateStaffComponent,
    ViewStaffComponent, 
    ListStaffComponent
  ],
  imports: [
    CommonModule,
    StaffsRoutingModule
  ]
})
export class StaffsModule { }
