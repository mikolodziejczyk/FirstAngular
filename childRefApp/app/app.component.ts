import { Component, AfterViewInit, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { SquareComponent } from './square/square.component';
import { RoundComponent } from './round/round.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'app';



  ngAfterViewInit(): void {

  }
}
