import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.less']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  startDate: Date = new Date();
  longText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam dui, efficitur quis porta id, ultrices nec nulla. Vivamus maximus auctor orci id semper. Cras vestibulum tempus magna, nec tincidunt erat placerat vel. ";
  rate : number = 12.23;
  percentageCompleted : number = 0.32;
  getMe = () : DisplayComponent => this;
}
