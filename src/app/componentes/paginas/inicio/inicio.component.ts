import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';
import { Libro } from '../../../interfaces/libro';
import swal from 'sweetalert';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  estaCargando: Boolean = true;
  busqueda: String = '';
  libros: Array<Libro> = [];

  constructor(private servicioLibros: LibrosService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  buscar() {
    this.cargarLibros(this.busqueda);
  }

  cargarLibros(busqueda: String = '') {
    this.estaCargando = true;
    const filtros = busqueda.length > 0 ? { nombre: busqueda } : {};

    this.servicioLibros.obtenerLibros(filtros)
      .subscribe(
        (librosConsultados) => {
          this.libros = librosConsultados;
          this.estaCargando = false;
        },
        (error) => {
          this.estaCargando = false;
          console.error('Error trayendo los libros: ', error);
          swal('Error consultando los libros', error.error.mensaje, 'error');
        }
      )
  }
}
