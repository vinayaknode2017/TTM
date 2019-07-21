import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediumComponent } from './medium.component';
import { ListMediumComponent } from './list-medium/list-medium.component';
import { ViewMediumComponent } from './view-medium/view-medium.component';
import { UpdateMediumComponent } from './update-medium/update-medium.component';
import { CreateMediumComponent } from './create-medium/create-medium.component';

const routes: Routes = [{
  path: '',
  component: MediumComponent,
  children: [
    {
      path: '',
      component: ListMediumComponent
    },
    {
      path: 'create',
      component: CreateMediumComponent
    },
    {
      path: 'update',
      component: UpdateMediumComponent
    },
    {
      path: 'view',
      component: ViewMediumComponent
    },
    {
      path: 'list',
      component: ListMediumComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediumsRoutingModule { }
