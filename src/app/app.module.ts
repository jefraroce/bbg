import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';

// Componentes
import { AppComponent } from './app.component';
import { LibroComponent } from './componentes/libro/libro.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { ComprasComponent } from './paginas/compras/compras.component';
import { CompraPorIdComponent } from './paginas/compra-por-id/compra-por-id.component';
import { NoEncontradaComponent } from './paginas/no-encontrada/no-encontrada.component';
import { LibroPorIdComponent } from './paginas/libro-por-id/libro-por-id.component';
import { PruebasComponent } from './paginas/pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    CarritoComponent,
    ComprasComponent,
    CompraPorIdComponent,
    NoEncontradaComponent,
    LibroPorIdComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
