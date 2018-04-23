import { Component, OnInit, Input } from '@angular/core';
import { BaseComponentInterface } from '../baseComponentInterface';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, BaseComponentInterface  {

  constructor() { }

  ngOnInit() {
  }

  @Input() message: string = "No custom message specified.";
}
