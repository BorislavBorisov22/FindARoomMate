import { Subscription } from 'rxjs/Subscription';
import { UserStorageService } from './../../services/user-storage.service';
import { NotificationService } from './../../services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from './../../services/offers.service';
import { Offer } from './../../models/offer.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-info',
  templateUrl: './offer-info.component.html',
  styleUrls: ['./offer-info.component.css']
})

export class OfferInfoComponent implements OnInit, OnDestroy {
  offer: Offer;
  comment: string;
  isUserLogged: boolean;

  private subscriptions: Subscription[];

  constructor(
    private readonly offersService: OffersService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly notificator: NotificationService,
    private readonly userStorageService: UserStorageService,
  ) { }

  ngOnInit() {
    this.subscriptions = [];
    this.offer = new Offer();
    const offerId = this.activatedRoute.snapshot.params.id;
    this.isUserLogged = this.userStorageService.isUserLogged();

    const sub = this.offersService.getOfferInfo(offerId)
      .map((r) => r.json())
      .subscribe((response) => {
        this.offer = response.offer;
      }, (err) => {
      });

    this.subscriptions.push(sub);
  }

  onAddComment() {
    const offerId = this.activatedRoute.snapshot.params.id;
    const sub = this.offersService.addComment(this.comment, offerId)
      .map(r => r.json())
      .subscribe((responseObject: any) => {
        this.offer = responseObject.offer;

        this.notificator.showSuccess('Comment has been added to offer.');
      }, (err) => {
      });

    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
