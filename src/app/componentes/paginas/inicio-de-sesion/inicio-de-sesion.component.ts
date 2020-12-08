import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.scss']
})
export class InicioDeSesionComponent {
  formularioInicioDeSesion: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticacionServicio: AutenticacionService) {
    this.formularioInicioDeSesion = this.formBuilder.group({
      correoElectronico: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  iniciarSesion() {
    this.autenticacionServicio.autenticar( this.formularioInicioDeSesion.value )
      .subscribe((respuesta: any) => {
        this.autenticacionServicio.guardarToken(respuesta.jwt);
        swal('Exito', 'Has logrado iniciar sesión', 'success');
      }, (error) => {
        console.error('Error autenticando el cliente: ', error);
        swal('Error', error.error.mensaje, 'error');
      })
  }
}
