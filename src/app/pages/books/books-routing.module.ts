import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [{
  path: '',
  component: BookComponent,
  children: [
    {
      path: '',
      component: ListBookComponent
    },
    {
      path: 'create',
      component: CreateBookComponent
    },
    {
      path: 'update',
      component: UpdateBookComponent
    },
    {
      path: 'view',
      component: ViewBookComponent
    },
    {
      path: 'list',
      component: ListBookComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
