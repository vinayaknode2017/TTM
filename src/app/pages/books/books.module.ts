import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

@NgModule({
  declarations: [BookComponent, ListBookComponent, CreateBookComponent, UpdateBookComponent, ViewBookComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
