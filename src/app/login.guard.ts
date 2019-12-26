import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class LoginGuard implements CanActivate {

    constructor( private auth: AuthorizationService,
                 private _router: Router) { }

    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    }

}
