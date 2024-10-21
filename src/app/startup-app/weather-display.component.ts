import { CommonModule, NgClass, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '../shared/services/third-party/weather/weather.service';

@Component({
  selector: 'weather-display',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    CommonModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  templateUrl: './weather-display.component.html',
  styleUrl: './startup-app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class WeatherDisplayComponent implements OnInit {

  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.weatherData$.subscribe({
      next: (data) => {
        if (data) {
          this.weatherData = data;
          console.log(data);
        }
      },
      error: (error) => {
        console.error('Error in subscription:', error);
      }
    });
    this.weatherService.getWeatherByCoordinates();
  }

  convertDegreeC() {

  } 
  getTime(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleTimeString(); // Format as local time
  }
}
