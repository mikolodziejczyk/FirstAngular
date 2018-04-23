import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.less']
})
export class MyFormComponent implements OnInit {


  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }



  myForm: FormGroup;
  recipientsControl: FormArray;

  createForm(): any {
    this.myForm = this.fb.group({
      recipients: this.fb.array([])
    });
    this.recipientsControl =  <FormArray>this.myForm.get('recipients');

    this.addRecipent(null);
    this.addRecipent(null);
    this.addRecipent(null);
  }

  addRecipent(mail: string) {
    let c: FormControl = new FormControl(mail);
    this.recipientsControl.push(c);
  }
  
  toggleDisableControl = () => {

  };

  toggleDisableArray = () => {

  };

  toggleDisableGroup = () => {

  };

  onSubmit = () => {
    let s : string = JSON.stringify(this.myForm.value);
    console.log(s);

  }
}
