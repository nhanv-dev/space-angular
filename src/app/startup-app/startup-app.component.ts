import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, share, Subscription, timer } from 'rxjs';
import { SharedLayoutService } from '../shared/services/shared-layout.service';
import { SharedModule } from '../shared/shared.module';
import { WeatherService } from './../shared/services/third-party/weather/weather.service';
import { WeatherDisplayComponent } from "./weather-display.component";

@Component({
  selector: 'startup-app',
  standalone: true,
  imports: [
    NgClass,
    SharedModule,
    RouterLink,
    HttpClientModule,
    WeatherDisplayComponent,
  ],
  providers: [WeatherService],
  templateUrl: './startup-app.component.html',
  styleUrl: './startup-app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StartupAppComponent implements OnInit, OnDestroy {

  rxTime = new Date();
  subscription: Subscription = new Subscription();

  listBackground: string[] = [
    'https://wallpapercave.com/wp/wp5204103.jpg',
    'https://wallpapercave.com/wp/wp13456626.jpg',
  ];
  background: string | null = null;

  constructor(
    private sharedLayoutService: SharedLayoutService,
  ) {
    this.background = this.listBackground[Math.floor(Math.random() * this.listBackground.length)];
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
