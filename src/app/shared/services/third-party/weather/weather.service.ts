// src/app/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	private apiKey = '5ae53195f2b1c3f6a0eb153b65379699';
	private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

	private weatherDataSubject = new BehaviorSubject<any>(null);
	public weatherData$: Observable<any> = this.weatherDataSubject.asObservable();


	city: string | null = null;
	latitude: number | null = null;
	longitude: number | null = null;

	constructor(private http: HttpClient) { }

	getCurrentLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				this.latitude = position.coords.latitude;
				this.longitude = position.coords.longitude;
			}, (error) => {
				console.error('Error getting location: ', error);
			});
		}
	}

	getWeatherByCity(city?: string): Observable<any> {
		if (city) this.city = city;
		const url = `${this.apiUrl}?q=${this.city}&limit=10&appid=${this.apiKey}`;
		return this.http.get(url);
	}

	getWeatherByCoordinates(): void {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				this.latitude = position.coords.latitude;
				this.longitude = position.coords.longitude;

				const item = sessionStorage.getItem('weatherData');
				if (item) {
					this.weatherDataSubject.next(JSON.parse(item));
					return;
				}
				const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${this.apiKey}`;

				this.http.get(url)
					.pipe(map((data: any) => data))
					.subscribe({
						next: (data) => {
							sessionStorage.setItem('weatherData', JSON.stringify(data));
							this.weatherDataSubject.next(data);
						},
						error: (error) => {
							console.error('Error fetching weather data:', error);
						}
					});
			}, (error) => {
				console.error('Error getting location: ', error);
			});
		}
	}
}
