import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from '../../../../../src/app/user/user-settings.service';

@Component({
  selector: 'app-font-toggle',
  templateUrl: './font-toggle.component.html',
  styleUrls: ['./font-toggle.component.scss']
})
export class FontToggleComponent implements OnInit {

  constructor(private userSettings: UserSettingsService) { }

  ngOnInit() {
  }

  onClickCtl(ev, dir) {
    dir === '+' ? this.userSettings.incCaptionFontSize() : this.userSettings.decCaptionFontSize();
  }
}
