import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../data/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiUrl}?user=${username}&password=${password}`);
  }
}
