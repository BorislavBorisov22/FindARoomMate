import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [NavigationComponent],
  exports: [
    HttpModule
  ]
})

export class SharedModule { }
