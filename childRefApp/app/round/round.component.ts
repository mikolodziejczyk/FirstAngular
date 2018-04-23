import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.less']
})
export class RoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() text: string;
  @Input() selected: boolean;
}
