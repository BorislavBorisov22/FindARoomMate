import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NavigationComponent } from './navigation/navigation.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { PaginationComponent } from './utils/pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    CommonModule,
    NgbModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
  ],
  declarations: [NavigationComponent, PaginationComponent, FooterComponent],
  exports: [
    HttpModule,
    NavigationComponent,
    CommonModule,
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule,
    PaginationComponent,
    FooterComponent,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
