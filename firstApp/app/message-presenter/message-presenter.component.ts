import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-presenter',
  templateUrl: './message-presenter.component.html',
  styleUrls: ['./message-presenter.component.less']
})
export class MessagePresenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title: string;
  @Input() body: string;

}
