import { OffersService } from './../../services/offers.service';
import { Offer } from './../../models/offer.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  offer: Offer;

  constructor(
    private readonly offersService: OffersService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.offer = new Offer();
  }

  onAddSubmit(): void {
    this.offersService.addOffer(this.offer)
      .map(r => r.json())
      .subscribe((responseObject) => {
        this.offer = responseObject.offer;
        this.router.navigateByUrl('/');
      }, (err) => {
      });
  }

}
