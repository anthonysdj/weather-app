import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentWeather, WeatherForeCast } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<CurrentWeather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', environment.apiKey);

    return this.http.get<CurrentWeather>(environment.apiUrl + 'weather', { params: options });
  }

  getFiveDayWeather(lat: number, lon: number): Observable<WeatherForeCast> {
    const options = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('cnt', 5)
      .set('units', 'metric')
      .set('appId', environment.apiKey);

    return this.http.get<WeatherForeCast>(environment.apiUrl + 'forecast', { params: options });
  }
}
