import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-presenter',
  templateUrl: './message-presenter.component.html',
  styleUrls: ['./message-presenter.component.less']
})
export

  class MessagePresenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title:

    string;

  @Input() set body(body: string) {
    this._body = body;
    this.bodyHtml = body.replace(/\n/g, "<br/>");
  }
  get body(): string {
    return this._body
  }

  _body: string;
  bodyHtml: string;


}
