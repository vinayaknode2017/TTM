import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: StudentComponent,
  children: [
    {
      path: '',
      component: ListStudentsComponent
    },
    {
      path: 'create',
      component: CreateStudentComponent
    },
    {
      path: 'update',
      component: UpdateStudentComponent
    },
    {
      path: 'view',
      component: ViewStudentComponent
    },
    {
      path: 'list',
      component: ListStudentsComponent
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
