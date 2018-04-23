import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Person } from '../personTemplateData';

@Component({
  selector: 'app-person-renderer',
  templateUrl: './person-renderer.component.html',
  styleUrls: ['./person-renderer.component.css']
})
export class PersonRendererComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  personData: Person = { firstName: "Tom", lastName: "Smith" };

}
