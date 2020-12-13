import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/interfaces/libro';
import { LibrosService } from '../../../services/libros.service';

@Component({
  selector: 'app-libro-por-id',
  templateUrl: './libro-por-id.component.html',
  styleUrls: ['./libro-por-id.component.scss']
})
export class LibroPorIdComponent implements OnInit {
  cantidad: number = 1;
  total: number = 0;

  libro: Libro = {
    _id: '',
    caratula: '',
    nombre: '',
    descripcion: '',
    valorUnitario: 0,
    categorias: []
  };

  constructor(private servicioLibros: LibrosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params) => {
        this.cargarLibro(params.id)
      });
  }

  calcularTotal() {
    this.total = this.cantidad * this.libro.valorUnitario;
  }

  cargarLibro(idLibro: String) {
    this.servicioLibros.obtenerLibroPorId(idLibro)
      .subscribe(
        (libroConsultado) => {
          this.libro = libroConsultado;
          this.calcularTotal();
        },
        (error) => {
          console.error('Error accesediendo a los parametros ', error);
        }
      );
  }
}
