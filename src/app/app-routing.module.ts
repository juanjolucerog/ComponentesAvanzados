import { ReportesComponent } from './reportes/reportes.component';
import { AlertasComponent } from './alertas/alertas.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Menu/Alertas', component: AlertasComponent },
  { path: 'Menu/Reportes', component: ReportesComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
