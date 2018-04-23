import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit, OnDestroy {

  constructor() { 
    this.id = 123;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    
  }

  _id: number;

  get id() : number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
