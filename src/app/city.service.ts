import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: string[] = [];

  constructor() { }

  getCities(): string[] {
    return this.cities;
  }

  addCity(city: string): void {
    if (!this.cities.includes(city)) {
      this.cities.push(city);
    }
  }

  removeCity(city: string): void {
    const index = this.cities.indexOf(city);
    if (index !== -1) {
      this.cities.splice(index, 1);
    }
  }
}
