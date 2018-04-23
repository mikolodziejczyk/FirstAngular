import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.less']
})
export class FormRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() label: string;
  @Input() id: string;
}
