import { Router } from '@angular/router';
import { OffersService } from './../../services/offers.service';
import { Offer } from './../../models/offer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-info',
  templateUrl: './offer-info.component.html',
  styleUrls: ['./offer-info.component.css']
})
export class OfferInfoComponent implements OnInit {

  offer: Offer;

  constructor(
    private readonly offersService: OffersService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.offer = new Offer();
    this.offersService.getOfferInfo()
    .map((r) => r.json())
      .subscribe((response) => {
        this.offer = response.offer;
      }, (err) => {
      });
  }

}
