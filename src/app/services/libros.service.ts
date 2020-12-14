import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../interfaces/libro';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  BASE_URL = `${environment.API_URL}/libros`

  constructor(private http: HttpClient) { }

  obtenerLibros(parametros: {}) {
    return this.http.get<Array<Libro>>(this.BASE_URL, { params: parametros })
  }

  obtenerLibroPorId(idLibro: String) {
    return this.http.get<Libro>(`${this.BASE_URL}/${idLibro}`)
  }
}
