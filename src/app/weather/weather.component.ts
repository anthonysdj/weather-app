import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { LocationService } from '../location.service';
import { CurrentWeather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather?: CurrentWeather;

  constructor(private weatherService: WeatherService, private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getClientLocation();

    this.locationService.location$.pipe(
      switchMap(({lat, lon}: CurrentWeather['coord']) => {
        return this.weatherService.getFiveDayWeather(lat, lon);
      })
    ).subscribe();
  }

  search(city: string) {
    this.weatherService.getCurrentWeather(city).subscribe(weather => {
      this.weather = weather;
    });
  }

}
