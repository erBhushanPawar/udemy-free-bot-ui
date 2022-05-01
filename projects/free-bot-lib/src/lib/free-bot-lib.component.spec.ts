import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeBotLibComponent } from './free-bot-lib.component';

describe('FreeBotLibComponent', () => {
  let component: FreeBotLibComponent;
  let fixture: ComponentFixture<FreeBotLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeBotLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeBotLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
