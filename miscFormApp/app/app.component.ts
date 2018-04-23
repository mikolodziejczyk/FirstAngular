import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() {

  }

  title = 'app';

  private subscription: Subscription;

  ngOnInit(): void {
    // this.subscription = helpControl.valueChanges.subscribe( (value : string) => console.log(`Help: ${value}`));
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }


}
