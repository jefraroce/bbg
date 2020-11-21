import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DisenoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
