import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { EAuthMode } from './../models/auth.model';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

    public name: string = '';
    public username: string = '';
    public email: string = '';
    public password: string = '';

    public authMode: EAuthMode = EAuthMode.Login;

    constructor(private route: ActivatedRoute) {
        this.route.url.subscribe((segments: UrlSegment[]) => {
            if (segments) {
                segments.forEach(s => console.log(s.path));
                if (segments.some(s => s.path.indexOf('register') != -1)) {
                    this.authMode = EAuthMode.Register;
                } else {
                    this.authMode = EAuthMode.Login;
                }
            }
        });
    }

    public submitCredentials(): void {
        const areInputsValid = this.validateInputs();
        console.log(areInputsValid);
    }

    public isRegisterMode(): boolean {
        return this.authMode == EAuthMode.Register;
    }

    private validateInputs(): boolean {
        const regExpForUname = new RegExp("[a-z][a-z0-9]+");
        const isValidUname = regExpForUname.test(this.username);
        return isValidUname;
    }
}
