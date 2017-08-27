import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    CommonModule,
    NgbModule,
  ],
  declarations: [NavigationComponent],
  exports: [
    HttpModule,
    NavigationComponent,
    CommonModule,
    NgbModule
  ]
})

export class SharedModule { }
