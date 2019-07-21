import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediumsRoutingModule } from './mediums-routing.module';
import { MediumComponent } from './medium.component';
import { ListMediumComponent } from './list-medium/list-medium.component';
import { CreateMediumComponent } from './create-medium/create-medium.component';
import { ViewMediumComponent } from './view-medium/view-medium.component';
import { UpdateMediumComponent } from './update-medium/update-medium.component';

@NgModule({
  declarations: [MediumComponent, ListMediumComponent, CreateMediumComponent, ViewMediumComponent, UpdateMediumComponent],
  imports: [
    CommonModule,
    MediumsRoutingModule
  ]
})
export class MediumsModule { }
