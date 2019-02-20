import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {

  constructor () { }

  _counterValue = null;
  isDisabled: boolean = false;

  ngOnInit() {
  }

  get counterValue() {
    return this._counterValue;
  }

  @Input("counterValue")
  set counterValue(val) {
    if (val === 0) { val = null; }
    this._counterValue = val;
  }

  increment() {
    if (this.counterValue == null) { this.counterValue = 0; }
    this.counterValue++;
  }

  decrement() {
    if (this.counterValue == null) { this.counterValue = 0; }
    this.counterValue--;
  }

}
