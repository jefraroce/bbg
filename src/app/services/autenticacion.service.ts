import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private TOKEN_NAME = 'bitToken';
  private BASE_URL = `${environment.API_URL}/clientes/autenticacion`;

  // Variable reactiva que me permitirá compartir su contenido con quienes se suscriban a los cambios
  private usuario = new BehaviorSubject(null);
  usuarioObservable = this.usuario.asObservable();

  constructor(private http: HttpClient) {
    this.usuario.next(this.obtenerInformacionDelCliente());
  }

  autenticar(credenciales = {}) {
    return this.http.post(this.BASE_URL, credenciales)
  }

  cerrarSesion() {
    localStorage.removeItem(this.TOKEN_NAME);
    this.usuario.next(null);
  }

  guardarToken(token: any) {
    localStorage.setItem(this.TOKEN_NAME, token);
    this.usuario.next(this.obtenerInformacionDelCliente());
  }

  obtenerInformacionDelCliente() {
    // Consulto el Token
    const token = localStorage.getItem(this.TOKEN_NAME);

    if (token) {
      // Decodificarlo
      const base64Url = token.split('.')[1]; // Acá extraemos solo la parte del medio del token
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const infoDelCliente = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(infoDelCliente);
    }

    return null;
  }
}
