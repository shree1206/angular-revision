import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ['Pdata'],
  outputs: ['Ccomponent']
})
export class ChildComponent {
  Ccomponent = new EventEmitter();
  Pdata: any;

  getdata(val: any) {
    this.Ccomponent.emit(val)
  }
}
