import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthorizationService } from "../../authorization.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent {

  confirmCode: boolean = false;
  codeWasConfirmed: boolean = false;
  error: string = "";

  constructor(private auth: AuthorizationService,
              private _router: Router) { }

  register(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.register(email, password).subscribe(
      (data) => {
        this.confirmCode = true;
      },
      (err) => {
        console.log(err);
        this.error = "Registration Error has occurred";
      }
    );
  }

  validateAuthCode(form: NgForm) {
    const code = form.value.code;

    this.auth.confirmAuthCode(code).subscribe(
      (data) => {
        //this._router.navigateByUrl('/');
        this.codeWasConfirmed = true;
        this.confirmCode = false;
        // this.auth.signIn(email, password).subscribe((data) => {
        //   this._router.navigateByUrl('/home');
        // }, (err)=> {
        //   this.emailVerificationMessage = true;
        // });
      },
      (err) => {
        console.log(err);
        this.error = "Confirm Authorization Error has occurred";
      });
  }
}
