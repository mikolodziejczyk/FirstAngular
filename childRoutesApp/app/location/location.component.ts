import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less']
})
export class LocationComponent implements OnInit, OnDestroy {


  constructor(private router: Router, private route: ActivatedRoute) {
    this.parameterSubscription = this.route.params.subscribe(params => {
      this.locationId = +params['locationId']; // (+) converts string 'id' to a number
    });

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.parameterSubscription.unsubscribe();
  }

  locationId: number = 0;
  private parameterSubscription: Subscription;

}
