import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const VISIBLE_PAGES = 5;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  currentPage: number;
  @Input()
  totalElementsCount: number;
  @Input()
  size: number;

  @Output()
  pageChangedEmitter: EventEmitter<number>;

  pages: number[];
  lastPage: number;

  constructor() {
    this.pageChangedEmitter = new EventEmitter();
  }

  getPages(): void {
    this.lastPage = Math.ceil(this.totalElementsCount / this.size);
    this.pages = [this.currentPage];
    let pagesCount = 1;

    let prevPage: number;
    let nextPage: number;
    while (pagesCount < VISIBLE_PAGES && pagesCount < this.lastPage) {
      prevPage = this.pages[0] - 1;
      nextPage = this.pages[this.pages.length - 1] + 1;

      if (nextPage > this.lastPage && prevPage < 1) {
        break;
      }

      if (prevPage > 0) {
        this.pages.unshift(prevPage);
        pagesCount += 1;
      }

      if (nextPage <= this.lastPage) {
        this.pages.push(nextPage);
        pagesCount += 1;
      }
    }
  }

  onPageChanged(page: number) {
    this.pageChangedEmitter.emit(page);
  }

  ngOnInit() {
    this.getPages();
  }
}
