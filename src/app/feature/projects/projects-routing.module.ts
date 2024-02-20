import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { ProjectTableComponent } from './project-table/project-table.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProjectsComponent,
    children: [
      { path: '', component: ProjectTableComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
