import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent {
  token = null;

  constructor(private clientesServicio: ClientesService) {
    this.clientesServicio.token$.subscribe((token) => {
      console.log('token', token)
      this.token = token
    })
  }

  cerrarSesion() {
    this.clientesServicio.cerrarSesion()
  }

}
