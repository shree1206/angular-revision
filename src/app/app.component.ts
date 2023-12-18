import { Component } from '@angular/core';
import { Employee } from './employee';

class abc {
  constructor() {
    console.log('abc class constructor called')
  }

  showname() {
    console.log('abc class function called');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [Employee, abc],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'Angular Crud Application';
  constructor(private _abc: abc, _employee: Employee) {
    _abc.showname();
    _employee.showname();
  }

  adata: any='';
  username = '';
  abc(val: any) {
    this.adata = val
  }
}
