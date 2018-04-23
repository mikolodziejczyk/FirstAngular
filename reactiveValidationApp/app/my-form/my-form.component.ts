import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.less']
})
export class MyFormComponent implements OnInit {



  constructor(private fb: FormBuilder) {
    this.createForm();

    this.firstName=<FormControl>this.myForm.controls["firstName"];
    this.lastName=<FormControl>this.myForm.controls["lastName"];
    this.eMail=<FormControl>this.myForm.controls["eMail"];
    this.notifyMe=<FormControl>this.myForm.controls["notifyMe"];
    this.range1=<FormControl>this.myForm.controls["range1"];
    this.range2=<FormControl>this.myForm.controls["range2"];

  }

  ngOnInit() {
  }


  myForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  eMail: FormControl;
  notifyMe: FormControl;
  range1: FormControl;
  range2: FormControl;


  createForm(): void {
    this.myForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: "",
      eMail: "",
      notifyMe: false,
      range1: "",
      range2: ""
    });
  }


  onSubmit() {
    console.log("Saving form.");

    if (!this.myForm.valid) {
      console.log("Invalid form.");
      return;
    }

    let values = this.myForm.value;
    console.log(JSON.stringify(values));

  };


}
