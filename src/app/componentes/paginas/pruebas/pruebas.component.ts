import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent {
  title = 'Listado de Animales';
  nombreAnimal = '';

  animales = [];

  role = 'administrador';
  // role = 'contador';
  // role = 'usuarioRegular';
  // role = 'vendedor';
  // esAdministrador = false;

  agregarAnimal() {
    if (this.nombreAnimal !== '') {
      this.animales.push(this.nombreAnimal);
      this.nombreAnimal = '';
    } else {
      alert('Debes agregar el nombre del animal');
    }
  }

  removerAnimal(i) {
    this.animales.splice(i, 1)
  }
}
