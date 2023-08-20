import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryChallengesComponent } from './history-challenges.component';

describe('HistoryChallengesComponent', () => {
  let component: HistoryChallengesComponent;
  let fixture: ComponentFixture<HistoryChallengesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryChallengesComponent]
    });
    fixture = TestBed.createComponent(HistoryChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
