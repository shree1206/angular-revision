import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-reactive-dform',
  templateUrl: './reactive-dform.component.html',
  styleUrls: ['./reactive-dform.component.css']
})
export class ReactiveDformComponent {

  ngOnInit() {
    this.signupForm.setValue({
      "fname": "vaibhav"
    });

    this.signupForm.get('fname')?.valueChanges.subscribe(data => {
      console.log(data)
    });

    this.signupForm.get('fname')?.statusChanges.subscribe(data => {
      console.log('status' + data)
    });

    this.signupForm.valueChanges.subscribe(data => {
      console.log(data.fname)
    })

    this.signupForm.statusChanges.subscribe(data => {
      console.log(data)
    })
  }

  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupForm = fb.group({
      fname: ['', Validators.compose([Validators.required])]
      // fname: new FormControl()
    })
  }

  fisrtName: any;
  postdata() {
    //this.fisrtName = data.controls.fname.value;
    this.fisrtName = this.signupForm.get('fname')?.value;
    console.log(this.fisrtName);
  }
}
