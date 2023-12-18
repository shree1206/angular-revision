import { Component } from '@angular/core';
@Component({
  selector: 'app-template-dform',
  templateUrl: './template-dform.component.html',
  styleUrls: ['./template-dform.component.css']
})
export class TemplateDFormComponent {

  register(regForm: any) {
    //debugger;
    console.log(regForm.value);
    console.log(regForm.valid);
    console.log(regForm.touched);
    console.log(regForm.controls.Fname.value)
  }
}
