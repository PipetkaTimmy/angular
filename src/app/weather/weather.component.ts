import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityService } from '../city.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: any;
  cities: string[] = []; // Определите свойство cities

  constructor(private http: HttpClient, private cityService: CityService) { }

  ngOnInit(): void {
    // Получите список городов при инициализации компонента
    this.cities = this.cityService.getCities();
  }

  getWeather() {
    const apiKey = '730c798cb5ca676329a55dbda418d31b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.weatherData = data;
      this.cityService.addCity(data.name);
      // Обновите список городов после добавления нового города
      this.cities = this.cityService.getCities();
    });
  }

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

  removeCity(city: string): void {
    this.cityService.removeCity(city);
    // Обновите список городов после удаления города
    this.cities = this.cityService.getCities();
  }
}
