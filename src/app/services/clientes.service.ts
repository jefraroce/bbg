import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  BASE_URL = `${environment.API_URL}/clientes`

  constructor(private http: HttpClient) { }

  registrarCliente(datosCliente = {}) {
    return this.http.post(this.BASE_URL, datosCliente)
  }

}
