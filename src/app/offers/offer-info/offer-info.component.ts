import { NotificationService } from './../../services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from './../../services/offers.service';
import { Offer } from './../../models/offer.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-info',
  templateUrl: './offer-info.component.html',
  styleUrls: ['./offer-info.component.css']
})

export class OfferInfoComponent implements OnInit {
  offer: Offer;
  comment: string;

  constructor(
    private readonly offersService: OffersService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly notificator: NotificationService
  ) { }

  ngOnInit() {
    this.offer = new Offer();

    const offerId = this.activatedRoute.snapshot.params.id;

    this.offersService.getOfferInfo(offerId)
      .map((r) => r.json())
      .subscribe((response) => {
        this.offer = response.offer;
      }, (err) => {
      });
  }

  onAddComment() {
    const offerId = this.activatedRoute.snapshot.params.id;
    this.offersService.addComment(this.comment, offerId)
      .map(r => r.json())
      .subscribe((responseObject: any) => {
        this.offer = responseObject.offer;

        this.notificator.showSuccess('Comment has been added to offer.');
      }, (err) => {
      });
  }
}
