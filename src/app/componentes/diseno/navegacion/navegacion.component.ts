import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent {
  // Inicialmente es null porque se asume que el cliente no ha iniciado sesión
  usuario = null;

  constructor(private autenticacionServicio: AutenticacionService) {
    this.autenticacionServicio.usuarioObservable.subscribe(
      (infoUsuario) => {
        console.log('usuario ', infoUsuario)
        this.usuario = infoUsuario
      }
    )
  }

  cerrarSesion() {
    this.autenticacionServicio.cerrarSesion()
  }
}
