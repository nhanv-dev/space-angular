import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';
import { SharedLayoutService } from '../shared/services/shared-layout.service';
import { SharedModule } from '../shared/shared.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'startup-app',
  standalone: true,
  imports: [
    NgClass,
    SharedModule,
    RouterLink,
  ],
  templateUrl: './startup-app.component.html',
  styleUrl: './startup-app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StartupAppComponent implements OnInit, OnDestroy {

  rxTime = new Date();
  subscription: Subscription = new Subscription();

  constructor(private sharedLayoutService: SharedLayoutService) {

  }

  ngOnInit(): void {
    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(map(() => new Date()), share())
      .subscribe(time => {
        this.rxTime = time;
      });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
