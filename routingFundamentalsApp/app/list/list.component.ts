import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit, OnDestroy {


  constructor() { 
    this.orderBy = "name";
    this.ascending = true;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {

  }

  private _orderBy: string;

  get orderBy() : string {
    return this._orderBy;
  }

  set orderBy(value : string)  {
    this._orderBy = value;
  }

  private _ascending : boolean;

  get ascending() : boolean {
    return this._ascending;
  }

  set ascending(value : boolean) {
    this._ascending = value;
  }
}
