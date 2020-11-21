import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Carga de componentes para las páginas por defecto
import { CarritoComponent } from './componentes/paginas/carrito/carrito.component';
import { CompraPorIdComponent } from './componentes/paginas/compra-por-id/compra-por-id.component';
import { ComprasComponent } from './componentes/paginas/compras/compras.component';
import { InicioDeSesionComponent } from './componentes/paginas/inicio-de-sesion/inicio-de-sesion.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { LibroPorIdComponent } from './componentes/paginas/libro-por-id/libro-por-id.component';
import { NoEncontradaComponent } from './componentes/paginas/no-encontrada/no-encontrada.component';
import { RegistroComponent } from './componentes/paginas/registro/registro.component';

// En este componente tenemos los demos que probamos inicialmente
import { PruebasComponent } from './componentes/paginas/pruebas/pruebas.component';

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
