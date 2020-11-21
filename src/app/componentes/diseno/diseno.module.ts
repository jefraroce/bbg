import { NgModule } from '@angular/core';

// Cargamos este modulo para que los enlaces dentro del componente de navegación funcionen.
import { RouterModule } from '@angular/router';

// Componentes
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PublicidadComponent } from './publicidad/publicidad.component';

@NgModule({
  declarations: [
    NavegacionComponent,
    PublicidadComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavegacionComponent,
    PublicidadComponent
  ]
})
export class DisenoModule { }
