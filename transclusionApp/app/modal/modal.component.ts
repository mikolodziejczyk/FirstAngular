import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @ViewChild("modal") modalRef : ElementRef;

  ngOnInit() {
  }

  show = () => {
    $(this.modalRef.nativeElement).modal('show');
   
  }
}
