import { Offer } from './../../models/offer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { OffersService } from './../../services/offers.service';
import { Component, OnInit } from '@angular/core';

const DEFAULT_PAGE_SIZE = 12;
const DEFAULT_PAGE = 1;

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.css']
})
export class AllOffersComponent implements OnInit {
  offers: Offer[];

  currentPage: number;
  pageSize: number;
  totalElementsCount: number;

  constructor(
    private readonly offersService: OffersService,
    private readonly activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.currentPage = this.activatedRouter.snapshot.queryParams.page || DEFAULT_PAGE;
    this.pageSize = this.activatedRouter.snapshot.queryParams.size || DEFAULT_PAGE_SIZE;

    this.offers = new Array<Offer>();
    this.offersService.getAllOffers(this.currentPage, this.pageSize)
      .map((r) => r.json())
      .subscribe((response) => {
        this.offers = response.offers;
        this.totalElementsCount = response.offersCount;
      }, (err) => {
      });
  }

  onPageChanged(ev): void {
    console.log(ev, 'emitted');
  }
}
