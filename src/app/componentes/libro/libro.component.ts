import { Component, Input } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent {
  @Input() infoLibro: Libro;

  constructor() { }

}
