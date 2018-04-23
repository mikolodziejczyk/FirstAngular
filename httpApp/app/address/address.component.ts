import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  address1: string;
  address2: string;
  city: string;
  zip: string;

}
