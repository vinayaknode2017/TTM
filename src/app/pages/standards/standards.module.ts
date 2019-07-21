import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardsRoutingModule } from './standards-routing.module';
import { StandardComponent } from './standard.component';
import { ListStandardComponent } from './list-standard/list-standard.component';
import { CreateStandardComponent } from './create-standard/create-standard.component';
import { UpdateStandardComponent } from './update-standard/update-standard.component';
import { ViewStandardComponent } from './view-standard/view-standard.component';

@NgModule({
  declarations: [
    StandardComponent, 
    ListStandardComponent, 
    CreateStandardComponent, 
    UpdateStandardComponent, 
    ViewStandardComponent
  ],
  imports: [
    CommonModule,
    StandardsRoutingModule
  ]
})
export class StandardsModule { }
