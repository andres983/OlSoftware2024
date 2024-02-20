import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProject } from '../../../core/data/IProject';
import { ProjectsService } from '../../../core/services/projects.service';


@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'id',
    'proyecto',
    'cliente',
    'repositorio',
    'desarrolladores',
    'ci',
    'cd',
    'frontend',
    'backend',
    'db',
    'alertas',
    'errores',
    'despliegues',
    'avance',
    'reporte',
    'status',
    'actions'
  ];

  dataSource!: MatTableDataSource<IProject>;

  constructor(private readonly projectsService: ProjectsService) {

  }

  ngOnInit(): void {
    this.getProjects().then((data: IProject[]) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngAfterViewInit() {

  }

  public getProjects(): Promise<IProject[]> {
    return new Promise((resolve, reject) => {

      this.projectsService.getProjects().subscribe({
        next: (data: IProject[]) => {
          resolve(data);
          console.log('============getProjects=====================');
          console.log(data);
          console.log('=================================');

        }
      })
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource!.paginator) {
    //   this.dataSource!.paginator.firstPage();
    // }
  }



}
