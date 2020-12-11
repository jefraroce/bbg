import { Component } from '@angular/core';
import { AutenticacionService } from './services/autenticacion.service';
declare let jQuery;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private autenticacionServicio: AutenticacionService) {
    const info = this.autenticacionServicio.obtenerInformacionDelCliente()
  }

}
