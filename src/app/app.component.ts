// import { normalize } from 'normalize-path';
import { Component } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tic-tac-toe';

  isActive (path) {
      // console.log(path, this.location);
      // return this.location.path().indexOf(path) > -1;
  }

  constructor(private _auth: AuthorizationService,
              private _router: Router) { }

  doLogout(){
    this._auth.logOut();
    this._router.navigateByUrl('/login');
  }

}
