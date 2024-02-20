import { Component, OnInit } from '@angular/core';
import { OpenweathermapService } from '../../../core/services/openweathermap.service';
import { DashboardService } from '../../../core/services/dashboard.service';
import { WeatherData } from '../../../core/data/IWeather';
import { IDashboardCard } from '../../../core/data/IDashboardCard';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public city: string = '';
  public weather: string = '';
  public pathImg: string = '';
  public errorsDeploy: number = 0;
  public pedingNc: number = 0;
  public projects: number = 0;
  public projectsDev: number = 0;


  constructor(
    private readonly openweathermapService: OpenweathermapService,
    private readonly dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.getWeatherByCity();
    this.getDataDashboardCards();

  }

  public getWeatherByCity(): void {
    this.city = 'Cali';
    this.openweathermapService.getWeatherByCity(this.city).subscribe({
      next: (data: WeatherData) => {
        this.city = data.name;
        this.weather = data.weather[0].description;
        switch (data.weather[0].main) {
          case 'Clouds':
            this.pathImg = '../../../../assets/imagenes/Tiempo/nublado.jpg';
            break;
          case 'Rain':
            this.pathImg = '../../../../assets/imagenes/Tiempo/lluvia.jpg';
            break;
          case 'Clear':
            this.pathImg = '../../../../assets/imagenes/Tiempo/soleado.jpg';
            break;
          default:
            console.log("Fall");
        }
      }
    });
  }

  public getDataDashboardCards(): void {
    this.dashboardService.getDataDashboardCards().subscribe({
      next: (data: IDashboardCard) => {

        this.errorsDeploy = data.errors_deploy;
        this.pedingNc = data.peding_nc;
        this.projects = data.projects;
        this.projectsDev = data.projects_dev;

      }
    });
  }

}
