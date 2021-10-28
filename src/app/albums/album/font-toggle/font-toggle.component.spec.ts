import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSettingsService } from '../../../user/user-settings.service';

import { FontToggleComponent } from './font-toggle.component';

describe('FontToggleComponent', () => {
  let component: FontToggleComponent;
  let fixture: ComponentFixture<FontToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontToggleComponent ],
      imports: [UserSettingsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
