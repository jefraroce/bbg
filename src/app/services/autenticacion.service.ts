import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  BASE_URL = `${environment.API_URL}/clientes/autenticacion`

  constructor(private http: HttpClient) { }

  autenticar(credenciales = {}) {
    return this.http.post(this.BASE_URL, credenciales)
  }

  cerrarSesion() {
    localStorage.removeItem('bitToken')
  }

  guardarToken(token: any) {
    localStorage.setItem('bitToken', token)
  }
}
