import { Component, ComponentFactoryResolver, AfterViewInit, ViewChild, ViewContainerRef, AfterContentInit, Inject, Type } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { BaseComponentInterface } from "./baseComponentInterface"
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
  }

  remove = () => {
    
  };
}
