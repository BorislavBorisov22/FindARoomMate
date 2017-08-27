import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdSidenav } from '@angular/material';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    HttpModule
  ],
  declarations: [],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    HttpModule
  ]
})

export class SharedModule { }
