// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.less']
// })
// export class HomeComponent implements OnInit {
//
//   constructor() { }
// 
//   ngOnInit() {
//   }
//
// }


import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../../authorization.service";
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  bAuthenticated = false;

  constructor(private http: Http, private auth: AuthorizationService) { }

  ngOnInit() {
    var authenticatedUser = this.auth.getAuthenticatedUser();
    if (authenticatedUser == null) {
      return;
    }
    this.bAuthenticated = true;

  }

}
