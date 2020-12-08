import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DisenoModule } from './componentes/diseno/diseno.module';

// Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { LibroComponent } from './componentes/utilidades/libro/libro.component';
import { CarritoComponent } from './componentes/paginas/carrito/carrito.component';
import { ComprasComponent } from './componentes/paginas/compras/compras.component';
import { CompraPorIdComponent } from './componentes/paginas/compra-por-id/compra-por-id.component';
import { NoEncontradaComponent } from './componentes/paginas/no-encontrada/no-encontrada.component';
import { LibroPorIdComponent } from './componentes/paginas/libro-por-id/libro-por-id.component';
import { PruebasComponent } from './componentes/paginas/pruebas/pruebas.component';
import { RegistroComponent } from './componentes/paginas/registro/registro.component';
import { InicioDeSesionComponent } from './componentes/paginas/inicio-de-sesion/inicio-de-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    CarritoComponent,
    ComprasComponent,
    CompraPorIdComponent,
    NoEncontradaComponent,
    LibroPorIdComponent,
    PruebasComponent,
    InicioComponent,
    RegistroComponent,
    InicioDeSesionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DisenoModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
