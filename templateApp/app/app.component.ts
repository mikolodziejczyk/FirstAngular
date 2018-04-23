import { Component, TemplateRef, ViewChild, ViewContainerRef,  OnInit } from '@angular/core';
import { Person } from './personTemplateData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'app';

  person: Person = null;


  ngOnInit(): void {
    window.setTimeout( () => {this.person = { firstName: "John", lastName: "Doe" };}, 2000)
  }

  alter = () => {

  }
}

