import { Component } from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherApp';
  cities: string[] = [];

  constructor(private cityService: CityService) {
    this.cities = cityService.getCities();
  }

  removeCity(city: string): void {
    this.cityService.removeCity(city);
  }
}
