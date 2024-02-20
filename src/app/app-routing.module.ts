import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login', loadChildren: () => import('./feature/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./feature/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
