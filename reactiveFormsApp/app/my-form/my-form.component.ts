import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.less']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setFirstName = () => {
    console.log("setFirstName() called.");
  };

  setDefaults = () => {
    console.log("setDefaults() called.");
  };

}
