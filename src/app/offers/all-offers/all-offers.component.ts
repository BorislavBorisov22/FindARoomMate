import { Offer } from './../../models/offer.model';
import { Router } from '@angular/router';
import { OffersService } from './../../services/offers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.css']
})
export class AllOffersComponent implements OnInit {

 offers: Offer[];

  constructor(
    private readonly offersService: OffersService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.offers = new Array<Offer>();
    this.offersService.getAllOffers()
    .map((r) => r.json())
      .subscribe((response) => {
        this.offers = response.offers;
      }, (err) => {
      });
  }
}
