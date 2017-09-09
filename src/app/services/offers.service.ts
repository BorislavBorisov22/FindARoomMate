import { UserStorageService } from './user-storage.service';
import { Offer } from './../models/offer.model';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';

const DOMAIN_URL = 'http://localhost:4201/api';
const ADD_OFFER_URL = DOMAIN_URL + '/offers/add';
const ALL_OFFERS_URL = DOMAIN_URL + '/offers/all';
const OFFER_INFO_URL = DOMAIN_URL + '/offers/';

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

  getAllOffers(page: number, size: number) {
    const url = ALL_OFFERS_URL + '?page=' + page + '&size=' + size;
    return this.httpRequester.get(url, {});
  }

  getOfferInfo(offerId: string) {
    const url = OFFER_INFO_URL + offerId;
    return this.httpRequester.get(url, {});
  }
}
