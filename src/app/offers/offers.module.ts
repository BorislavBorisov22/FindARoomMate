import { SortPipe } from './../shared/pipes/sort.pipe';
import { OfferInfoComponent } from './offer-info/offer-info.component';
import { FormsModule } from '@angular/forms/';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersRoutingModule } from './offers-routing.module';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { AllOffersComponent } from './all-offers/all-offers.component';

@NgModule({
  imports: [
    SharedModule,
    OffersRoutingModule,
    FormsModule
  ],
  declarations: [
    AddOfferComponent,
    AllOffersComponent,
    OfferInfoComponent,
    SortPipe,
]
})
export class OffersModule { }
