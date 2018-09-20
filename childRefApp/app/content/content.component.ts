import { Component, OnInit, ContentChild, AfterViewInit, ContentChildren, QueryList, ElementRef } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { RoundComponent } from '../round/round.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit(): void {

  }

}
