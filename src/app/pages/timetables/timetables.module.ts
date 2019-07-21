import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetablesRoutingModule } from './timetables-routing.module';
import { TimetableComponent } from './timetable.component';
import { ListTimetablesComponent } from './list-timetables/list-timetables.component';
import { CreateTimetablesComponent } from './create-timetables/create-timetables.component';
import { UpdateTimetablesComponent } from './update-timetables/update-timetables.component';
import { ViewTimetablesComponent } from './view-timetables/view-timetables.component';

@NgModule({
  declarations: [
    TimetableComponent, 
    ListTimetablesComponent, 
    CreateTimetablesComponent, 
    UpdateTimetablesComponent, 
    ViewTimetablesComponent
  ],
  imports: [
    CommonModule,
    TimetablesRoutingModule
  ]
})
export class TimetablesModule { }
