import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formularioDeRegistro: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private clientesService: ClientesService
    ) {
    this.formularioDeRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      genero: ['', Validators.required],
      celular: ['', Validators.required],
      correoElectronico: ['', Validators.required, Validators.email],
      contrasena: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrarUsuario () {
    console.log('this.formularioDeRegistro ', this.formularioDeRegistro)

    if ( this.formularioDeRegistro.valid ) {
      this.clientesService.registrarCliente(this.formularioDeRegistro.value)
        .subscribe(
          (respuesta) => { // Si todo sale bien
            console.log('Exito al registrar el cliente ', respuesta)
          },
          (error) => {// Si algo sale mal
            console.error('Error registrando cliente: ', error)

            const campos = Object.keys(error.error.errors)

            campos.forEach((campo) => {
              alert(error.error.errors[campo].message)
            })
          }
        )
    }

    document.querySelector('form').classList.add('was-validated')
  }

}
