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

  public firstName: string = "John";
  public lastName: string = "Doe";

  onSubmit = () => {
    let s : string = `${this.firstName} ${this.lastName}`;
    alert(s);
  };


}
