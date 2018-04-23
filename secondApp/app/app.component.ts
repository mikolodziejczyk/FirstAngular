import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor() {
    this.messageTitle = this.defaultTitle;
    this.messageBody = this.defaultBody;
  }

  messageTitle: string;
  messageBody: string;
  defaultTitle: string = "An exciting message";
  defaultBody = "Sample message body.";
}
