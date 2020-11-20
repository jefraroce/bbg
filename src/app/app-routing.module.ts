import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Carga de componentes para las páginas por defecto
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { CompraPorIdComponent } from './paginas/compra-por-id/compra-por-id.component';
import { ComprasComponent } from './paginas/compras/compras.component';
import { InicioDeSesionComponent } from './paginas/inicio-de-sesion/inicio-de-sesion.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LibroPorIdComponent } from './paginas/libro-por-id/libro-por-id.component';
import { NoEncontradaComponent } from './paginas/no-encontrada/no-encontrada.component';
import { RegistroComponent } from './paginas/registro/registro.component';

// En este componente tenemos los demos que probamos inicialmente
import { PruebasComponent } from './paginas/pruebas/pruebas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'inicio-de-sesion',
    component: InicioDeSesionComponent
  },
  {
    path: 'libros/:id',
    component: LibroPorIdComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'compras',
    component: ComprasComponent
  },
  {
    path: 'compras/:id',
    component: CompraPorIdComponent
  },
  {
    path: 'pruebas',
    component: PruebasComponent
  },
  {
    path: '**',
    component: NoEncontradaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
