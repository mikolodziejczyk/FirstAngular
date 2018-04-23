import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.less']
})
export class MyFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.createForm();

  }

  myForm: FormGroup;


  ngOnInit() {
  }

  createForm(): void {
    this.myForm = this.fb.group({

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
