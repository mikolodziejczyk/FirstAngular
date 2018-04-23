import { Component, OnInit, Input } from '@angular/core';
import { inherits } from 'util';
import { BaseComponentInterface } from '../baseComponentInterface';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, BaseComponentInterface {


  constructor() { }

  ngOnInit() {
  }

  @Input() message: string;
}
