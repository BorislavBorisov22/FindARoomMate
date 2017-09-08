import { FormsModule } from '@angular/forms/';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NavigationComponent } from './navigation/navigation.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { PaginationComponent } from './utils/pagination/pagination.component';


@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    CommonModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  declarations: [NavigationComponent, PaginationComponent],
  exports: [
    HttpModule,
    NavigationComponent,
    CommonModule,
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule
  ]
})

export class SharedModule { }
