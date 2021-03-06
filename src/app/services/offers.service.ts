import { Comment } from './../models/comment.model';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Offer } from './../models/offer.model';
import { Response } from '@angular/http';
import { UserStorageService } from './user-storage.service';

const DOMAIN_URL = '/api';
const ADD_OFFER_URL = DOMAIN_URL + '/offers/add';
const ALL_OFFERS_URL = DOMAIN_URL + '/offers/all';
const OFFER_INFO_URL = DOMAIN_URL + '/offers/';
const OFFERS_COUNT_URL = DOMAIN_URL + '/offers/count';

@Injectable()
export class OffersService {

  constructor(
    private readonly httpRequester: HttpRequesterService,
    private readonly userStorageService: UserStorageService
  ) { }

  addOffer(offer: Offer): Observable<Response> {
    const token = this.userStorageService.getLoggedUserToken();

    const headers = {
      token,
      'Content-Type': 'application/json',
    };

    return this.httpRequester.post(ADD_OFFER_URL, offer, headers);
  }

  getAllOffers() {
    return this.httpRequester.get(ALL_OFFERS_URL, {});
  }

  getOfferInfo(offerId: string) {
    const url = OFFER_INFO_URL + offerId;
    return this.httpRequester.get(url, {});
  }

  addComment(commentText: string, offerId: string) {
    const url = OFFER_INFO_URL + offerId;

    const loggedUsername = this.userStorageService.getLoggedUserUsername();
    const userPic = this.userStorageService.getLoggedUserProfilePicture();

    const commentToAdd = new Comment(commentText);

    const body = {
      comment: commentToAdd,
    };

    const token = this.userStorageService.getLoggedUserToken();

    const headers = {
      token,
    };

    return this.httpRequester.put(url, body, headers);
  }
}
