import { FormsModule } from '@angular/forms/';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersRoutingModule } from './offers-routing.module';
import { AddOfferComponent } from './add-offer/add-offer.component';

@NgModule({
  imports: [
    SharedModule,
    OffersRoutingModule,
    FormsModule
  ],
  declarations: [
    AddOfferComponent
]
})
export class OffersModule { }
