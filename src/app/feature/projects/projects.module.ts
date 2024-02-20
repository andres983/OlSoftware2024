import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { ProjectTableComponent } from './project-table/project-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeProjectsComponent,
    ProjectTableComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    SharedModule
  ],
  exports: [
    HomeProjectsComponent,
    ProjectTableComponent
  ]
})
export class ProjectsModule { }
