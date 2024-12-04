import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.scss']
})
export class BotonLoginComponent {
  public alertButtons = [
    {
      text: 'Confirmar',
      handler: () => {
        this.navigateToProfile();
      },
    },
  ];

  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
    {
      type: 'number',
      placeholder: 'Edad',
      min: 1,
      max: 100,
    },
    {
      placeholder: 'Correo Electronico',
    },
    {
      placeholder: 'Contraseña (max 4 caracteres)',
      type: 'password',
      attributes: {
        maxlength: 4,
      },
    },
  ];
  
  constructor(private router: Router) {}

  public navigateToProfile() {
    this.router.navigate(['/perfil']);
  }
}
