import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

      this.messageTitle = "An exciting message";
      this.messageBody = "Sample message body.";

  }

  messageTitle: string;
  messageBody: string;

}
