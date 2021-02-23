import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {
  }

  getMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];
    for (let start = startMonth; start <= 12; start++) {
      data.push(start);
    }
    return of(data);
  }

  getYears(): Observable<number[]> {
    let data: number[] = [];
    const startYear = new Date().getFullYear();
    const endYear = startYear + 10;
    for (let start = startYear; start <= endYear; start++) {
      data.push(start);
    }
    return of(data);
  }
}
