import { Component } from '@angular/core';
import { EAuthMode } from './../models/auth.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

    public username: string = '';
    public password: string = '';

    public authMode: EAuthMode = EAuthMode.Login;

    public submitCredentials(): void {}

}
