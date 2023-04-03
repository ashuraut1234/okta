import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouIngateComponent } from './thank-you-ingate.component';

describe('ThankYouIngateComponent', () => {
  let component: ThankYouIngateComponent;
  let fixture: ComponentFixture<ThankYouIngateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouIngateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankYouIngateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
