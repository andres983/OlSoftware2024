import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  WeatherData } from '../data/IWeather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {


  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';


  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${this.apiUrl}q=${city}&appid=${environment.apiWaather}`);
  }
}
