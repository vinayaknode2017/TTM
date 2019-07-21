import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { ListAttendanceComponent } from './list-attendance/list-attendance.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
import { CreateAttendanceComponent } from './create-attendance/create-attendance.component';

@NgModule({
  declarations: [ViewAttendanceComponent, ListAttendanceComponent, UpdateAttendanceComponent, CreateAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
