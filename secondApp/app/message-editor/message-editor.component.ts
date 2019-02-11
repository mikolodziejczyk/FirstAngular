
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.less']
})
export class MessageEditorComponent implements OnInit {

  constructor() { }

  title: string;
  body: string;

  ngOnInit() {
  }
}
