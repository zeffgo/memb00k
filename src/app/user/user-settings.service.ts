import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

const mockSettings = {captionFontSize: 16};

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  settings = JSON.parse(localStorage.getItem('settings')) || mockSettings;
  settings$ = new BehaviorSubject<any>(this.settings);

  constructor() { }

  saveSettings() {
    this.settings$.next(this.settings);
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  incCaptionFontSize() {
    this.settings.captionFontSize++;
    this.saveSettings();
  }

  decCaptionFontSize() {
    this.settings.captionFontSize--;
    this.saveSettings();
  }
}
