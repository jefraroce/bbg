import { NgModule } from '@angular/core';

// Cargamos este modulo para que los enlaces dentro del componente de navegación funcionen.
import { RouterModule } from '@angular/router';

// Componentes
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { ConPublicidadComponent } from './con-publicidad/con-publicidad.component';
import { SinPublicidadComponent } from './sin-publicidad/sin-publicidad.component';

@NgModule({
  declarations: [
    NavegacionComponent,
    PublicidadComponent,
    ConPublicidadComponent,
    SinPublicidadComponent
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
