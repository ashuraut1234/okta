import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouOutgateComponent } from './thank-you-outgate.component';

describe('ThankYouOutgateComponent', () => {
  let component: ThankYouOutgateComponent;
  let fixture: ComponentFixture<ThankYouOutgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouOutgateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankYouOutgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
