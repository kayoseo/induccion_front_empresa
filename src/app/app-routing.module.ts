import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  //ruta pagina principal
  { path: '', component: ListComponent },
  { path: 'new', component: NewComponent },
  /*ruta comodin en caso que se quiera
  acceder a una ruta que no este definida
  redirencciona a pagina principal */
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
