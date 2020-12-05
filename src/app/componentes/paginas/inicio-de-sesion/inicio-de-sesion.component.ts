import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.scss']
})
export class InicioDeSesionComponent {
  formularioInicioDeSesion: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientesServicio: ClientesService
  ) {
    this.formularioInicioDeSesion = this.formBuilder.group({
      correoElectronico: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  iniciarSesion() {
    if ( this.formularioInicioDeSesion.valid ) {
      // Envio las credenciales a traves del servicio de clientes
      this.clientesServicio.autenticar( this.formularioInicioDeSesion.value )
        .subscribe((token: any) => {
          // Utilizo un metodo del servicio de clientes para almacenar el token recibido
          this.clientesServicio.guardarToken(token.jwt);
          swal('¡Exito!', 'Te has autenticado con exito!', 'success');
        },
        (error) => {
          console.error('Error en la autenticación: ', error);
          swal('Error', error.error.error, 'error');
        })

    }

    document.querySelector('form').classList.add('was-validated')
  }
}
