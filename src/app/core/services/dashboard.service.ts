import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../data/IUser';
import { IDashboardCard } from '../data/IDashboardCard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = ' http://localhost:3000/dashboard_cards';

  constructor(private http: HttpClient) { }

  getDataDashboardCards(): Observable<IDashboardCard> {
    return this.http.get<IDashboardCard>(`${this.apiUrl}`);
  }
}
