import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdSidenav } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
  ],
  declarations: [],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
  ]
})

export class SharedModule { }
