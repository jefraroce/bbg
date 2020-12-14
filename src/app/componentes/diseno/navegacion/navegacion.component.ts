import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent {
  // Inicialmente es null porque se asume que el cliente no ha iniciado sesión
  usuario = null;

  constructor(
      private autenticacionServicio: AutenticacionService,
      private router: Router
    ) {
    this.autenticacionServicio.usuarioObservable.subscribe(
      (infoUsuario) => {
        this.usuario = infoUsuario
      }
    );
  }

  cerrarSesion() {
    this.autenticacionServicio.cerrarSesion();
    this.router.navigate(['/inicio']);
  }
}
