import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadComponent } from './components/actividad/actividad.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'estudiante', component: HomeComponent },
  { path: 'asignacion', component: AsignacionComponent },
  { path: 'actividad', component: ActividadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
