import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})

const VISIBLE_PAGES = 5;

export class PaginationComponent implements OnInit {

  @Input()
  currentPage: number;

  @Input()
  totalElementsCount: number;

  @Input()
  size: number;

  pages: number[];

  @Output()
  pageChangedEmitted: EventEmitter<number>;

  constructor() { }

  getPages(): void {
    this.currentPage = this.currentPage || 1;

    const lastPage = Math.ceil(this.totalElementsCount / this.size);
    this.pages = [this.currentPage];
    let pagesCount = 1;

    let prevPage: number;
    let nextPage: number;
    while (pagesCount < VISIBLE_PAGES) {
      prevPage = this.pages[0] - 1;
      nextPage = this.pages[this.pages.length - 1] + 1;

      if (nextPage > lastPage && prevPage < 1) {
        break;
      }

      if (prevPage > 0) {
        this.pages.unshift(prevPage);
        pagesCount += 1;
      }

      if (nextPage <= lastPage) {
        this.pages.push(nextPage);
        pagesCount += 1;
      }
    }
  }

  ngOnInit() {
    this.pageChangedEmitted = new EventEmitter();
    this.getPages();
  }

}
