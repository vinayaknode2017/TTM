import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { StudentsModule } from './students/students.module';
import { StaffsModule } from './staffs/staffs.module';
import { StandardsModule } from './standards/standards.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TimetablesModule } from './timetables/timetables.module';
import { UsersModule } from './users/users.module';
import { BookComponent } from './books/book.component';
import { MediumComponent } from './mediums/medium.component';
import { BooksModule } from './books/books.module';
import { MediumsModule } from './mediums/mediums.module';
import { LeaveComponent } from './leaves/leave.component';
import { LeavesModule } from './leaves/leaves.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    StudentsModule,
    StaffsModule,
    StandardsModule,
    SubjectsModule,
    TimetablesModule,
    UsersModule,
    BooksModule,
    MediumsModule,
    LeavesModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
