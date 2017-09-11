import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(offers: any, args?: any): any {

    offers.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

    return offers;
  }
}
