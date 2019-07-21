import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';

const routes: Routes = [{
  path: '',
  component: SubjectComponent,
  children: [
    {
      path: '',
      component: ListSubjectComponent
    },
    { 
      path: 'create',
      component: CreateSubjectComponent
    },
    {
      path: 'update',
      component: UpdateSubjectComponent
    },
    {
      path: 'view',
      component: ViewSubjectComponent
    },
    {
      path: 'list',
      component: ListSubjectComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
