import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimetableComponent } from './timetable.component';
import { ListTimetablesComponent } from './list-timetables/list-timetables.component';
import { CreateTimetablesComponent } from './create-timetables/create-timetables.component';
import { UpdateTimetablesComponent } from './update-timetables/update-timetables.component';
import { ViewTimetablesComponent } from './view-timetables/view-timetables.component';

const routes: Routes = [{
  path: '',
  component: TimetableComponent,
  children: [
    {
      path: '',
      component: ListTimetablesComponent
    },
    {
      path: 'create',
      component: CreateTimetablesComponent
    },
    {
      path: 'update',
      component: UpdateTimetablesComponent
    },
    {
      path: 'view',
      component: ViewTimetablesComponent
    },
    {
      path: 'list',
      component: ListTimetablesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetablesRoutingModule { }
