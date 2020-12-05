import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  BASE_URL = `${environment.API_URL}/clientes`

  private token = new BehaviorSubject<String>(null);
  token$ = this.token.asObservable();

  constructor(private http: HttpClient) {
    const jwtToken = localStorage.getItem('bitToken');
    if (jwtToken) {
      this.token.next(jwtToken);
    }
  }

  autenticar(credenciales = {}) {
    return this.http.post(`${this.BASE_URL}/autenticacion`, credenciales)
  }

  cerrarSesion() {
    localStorage.removeItem('bitToken');
    this.token.next(null);
  }

  guardarToken(jwtToken) {
    localStorage.setItem('bitToken', jwtToken);
    this.token.next(jwtToken);
  }

  registrarCliente(datosCliente = {}) {
    return this.http.post(this.BASE_URL, datosCliente)
  }

}
