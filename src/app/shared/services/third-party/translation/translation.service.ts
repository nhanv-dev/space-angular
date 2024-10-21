import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY';

  constructor(private http: HttpClient) {}

  translate(text: string, targetLang: string) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
    const body = {
      q: text,
      target: targetLang
    };

    return this.http.post(url, body);
  }
}
