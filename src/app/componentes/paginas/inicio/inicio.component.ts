import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';
import { Libro } from '../../../interfaces/libro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  libros: Array<Libro> = [];

  constructor(private servicioLibros: LibrosService) { }

  ngOnInit(): void {
    this.cargarLibros()
  }

  cargarLibros() {
    this.servicioLibros.obtenerLibros()
      .subscribe(
        (librosConsultados) => {
          this.libros = librosConsultados
        },
        (error) => {
          console.error('Error trayendo los libros', error)
        }
      )
  }
}
