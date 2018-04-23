import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.less']
})
export class MessageEditorComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  _title: string;

  @Input() set title(title: string) {
    this._title = title;
    this.titleChange.emit(this.title);
  }
  get title() { return this._title; }

  @Output() titleChange: EventEmitter<string> = new EventEmitter<string>();

  _body: string;

  @Input() set body(body: string) {
    this._body = body;
  }
  get body(): string { return this._body; }

  @Output() bodyChange: EventEmitter<string> = new EventEmitter<string>();


}
