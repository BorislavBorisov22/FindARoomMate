import { Subscription } from 'rxjs/Subscription';
import { Offer } from './../../models/offer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { OffersService } from './../../services/offers.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

const DEFAULT_PAGE_SIZE = 12;
const DEFAULT_PAGE = 1;
const ALL_OFFERS_URL = '/offers/all';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.css']
})
export class AllOffersComponent implements OnInit, OnDestroy {
  offers: Offer[];

  currentPage = DEFAULT_PAGE;
  pageSize = DEFAULT_PAGE_SIZE;
  totalElementsCount: number;

  private subsriptions: Subscription[];

  constructor(
    private readonly offersService: OffersService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.subsriptions = [];
    this.getOffersForCurrentPage();
    const sub = this.activatedRoute.queryParams
      .subscribe((params) => {
        this.currentPage = Number(params.page || DEFAULT_PAGE);
        this.pageSize = Number(params.size || DEFAULT_PAGE_SIZE);
        this.getOffersForCurrentPage();
      });

    this.subsriptions.push(sub);
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
    this.pageSize = this.pageSize === 0 ? DEFAULT_PAGE_SIZE : this.pageSize;
    const url = ALL_OFFERS_URL + '?page=' + this.currentPage + '&size=' + this.pageSize;
    this.router.navigateByUrl(url);
  }

  getOffersForCurrentPage(): void {
    this.offers = new Array<Offer>();
    const sub = this.offersService.getAllOffers()
      .map((r) => r.json())
      .subscribe((response) => {
        this.totalElementsCount = response.offers.length;

        const lastPage = Math.ceil(this.totalElementsCount / this.pageSize);
        if (this.currentPage > lastPage || this.currentPage < 1) {
          this.currentPage = 1;
        }

        this.offers = response.offers.reverse().splice((this.currentPage - 1) * this.pageSize, this.pageSize);
      }, (err) => {
      });

    this.subsriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subsriptions.forEach((s) => s.unsubscribe());
  }
}
