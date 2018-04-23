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

  // @ContentChildren(RoundComponent)
  // private round: QueryList<RoundComponent>;

  // @ContentChild("selectMe")
  // private myElement : ElementRef;

  @ContentChildren("selectMe, meToo")
  private elements : QueryList<ElementRef>;

  @ContentChildren("another")
  private elements2 : QueryList<ElementRef>;

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    window.setTimeout(() => { 
    this.elements.toArray().forEach(x=>
    {
      (<HTMLDivElement>x.nativeElement).classList.add("selected");
    });
    this.elements2.toArray().forEach(x=>
      {
        (<HTMLDivElement>x.nativeElement).style.color="red";
      });
      

    }, 1);
}

}
