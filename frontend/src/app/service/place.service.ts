import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Country} from '../model/country';
import {State} from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private httpClient: HttpClient) {
  }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>('http://localhost:8080/api/countries').pipe(map(response => response));
  }

  getStates(code: string): Observable<State[]> {
    return this.httpClient.get<State[]>(`http://localhost:8080/api/states?code=${code}`).pipe(map(response => response));
  }
}
