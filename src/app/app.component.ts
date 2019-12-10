// import { normalize } from 'normalize-path';
import { Component } from '@angular/core';

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

}