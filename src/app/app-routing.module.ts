import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebasComponent } from './componentes/pruebas/pruebas.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: PruebasComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
