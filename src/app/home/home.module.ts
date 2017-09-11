import { NavColorDirective } from './../shared/directives/nav-color.directive';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    NavColorDirective
  ]
})
export class HomeModule { }
