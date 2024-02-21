import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from '../data/IProject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = 'http://localhost:3000/projects';
  private dltProject = ' http://localhost:3000/projects/';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.apiUrl}`);
  }

  deleteProject(id: number): Observable<IProject> {
    return this.http.delete<IProject>(`${this.dltProject}${id}`);
  }

  createProject(data: IProject): Observable<IProject> {
    return this.http.post<IProject>(`${this.dltProject}`, data);
  }
}

