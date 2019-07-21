import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectComponent } from './subject.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';

@NgModule({
  declarations: [
    SubjectComponent, 
    ViewSubjectComponent, 
    CreateSubjectComponent, 
    UpdateSubjectComponent, 
    ListSubjectComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
