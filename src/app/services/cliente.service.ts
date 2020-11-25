import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  registrarCliente(datosCliente = {}) {
    return this.http.post(`${environment.API_URL}/clientes`, datosCliente)
  }

}
