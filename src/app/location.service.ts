import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CurrentWeather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  location$: Subject<CurrentWeather['coord']> = new Subject;

  constructor() { }

  getClientLocation() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      this.location$.next({
        lat: coords.latitude,
        lon: coords.longitude
      });
    });
  }
}
