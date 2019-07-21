import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardComponent } from './standard.component';
import { ListStandardComponent } from './list-standard/list-standard.component';
import { CreateStandardComponent } from './create-standard/create-standard.component';
import { UpdateStandardComponent } from './update-standard/update-standard.component';
import { ViewStandardComponent } from './view-standard/view-standard.component';

const routes: Routes = [{
  path: '',
  component: StandardComponent,
  children: [
    {
      path: '',
      component: ListStandardComponent
    },
    {
      path: 'create',
      component: CreateStandardComponent
    },
    {
      path: 'update',
      component: UpdateStandardComponent
    },
    {
      path: 'view',
      component: ViewStandardComponent
    },
    {
      path: 'list',
      component: ListStandardComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardsRoutingModule { }
