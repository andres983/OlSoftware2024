import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProject } from '../../../core/data/IProject';
import { ProjectsService } from '../../../core/services/projects.service';
import { SweetAlertService } from '../../../core/services/sweet-alert.service';


@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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

  constructor(
    private readonly projectsService: ProjectsService,
    private readonly sweetAlertServices: SweetAlertService
  ) {

  }

  ngOnInit(): void {
    this.getProjects().then((data: IProject[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
  }

  public getProjects(): Promise<IProject[]> {
    return new Promise((resolve, reject) => {

      this.projectsService.getProjects().subscribe({
        next: (data: IProject[]) => {
          resolve(data);
        }
      })
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();

    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }

  public editProject(row: IProject) {


  }


  public deleteProject(row: IProject) {
    const message = '¿Esta seguro de eliminar el proyecto?';
    const messageExit = 'Se ha eliminado con exito el proyecto';
    this.sweetAlertServices.sweetAlertAccionBoton(message).then((result: boolean) => {
      if (result === true) {

        this.projectsService.deleteProject(+row.id).subscribe({
          next: (data: IProject) => {
            if (data) {
              this.sweetAlertServices.sweetAlertInformativo(messageExit);
              window.location.reload();
            }
          }
        })
      }
    })
  }

}
