import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  transform(value: number): string {
    const fullStar = '★'; // étoile pleine
    const emptyStar = '☆'; // étoile vide
    const halfStar = '☆';// demi-étoile
    const rating = Math.round(value);
    return fullStar.repeat(rating) +  halfStar.repeat(value - rating) + emptyStar.repeat(5 - rating);
  }

}