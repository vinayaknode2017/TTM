import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { ListLeaveComponent } from './list-leave/list-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { LeaveComponent } from './leave.component';

@NgModule({
  declarations: [
    LeaveComponent, 
    ListLeaveComponent, 
    ViewLeaveComponent, 
    CreateLeaveComponent, 
    UpdateLeaveComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule
  ]
})
export class LeavesModule { }
