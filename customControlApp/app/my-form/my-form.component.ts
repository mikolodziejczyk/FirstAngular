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

  counter: number;

  onSubmit = () => {
    
    alert(`Submit: ${this.counter}`);

  };
}
