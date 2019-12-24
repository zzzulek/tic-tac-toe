// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.less']
// })
// export class LoginComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../authorization.service";
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent {
  emailVerificationMessage: boolean = false;

  constructor(private auth: AuthorizationService,
              private _router: Router) {

  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    this.auth.signIn(email, password).subscribe((data) => {
      this._router.navigateByUrl('/home');
    }, (err)=> {
      this.emailVerificationMessage = true;
    });
  }
}
