import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.less']
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() text: string;
  @Input() selected: boolean;

}
