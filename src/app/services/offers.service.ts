import { Offer } from './../models/offer.model';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';

const DOMAIN_URL = 'http://localhost:4201/api';
const ADD_OFFER_URL = DOMAIN_URL + '/offers/add';

@Injectable()
export class OffersService {

  constructor(
    private httpRequester: HttpRequesterService
) { }

addOffer(offer: Offer): Observable<Response> {
    return this.httpRequester.post(ADD_OFFER_URL, offer, {});
  }

}
