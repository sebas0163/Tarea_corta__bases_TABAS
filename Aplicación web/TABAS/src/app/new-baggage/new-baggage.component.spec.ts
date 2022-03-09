import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBaggageComponent } from './new-baggage.component';

describe('NewBaggageComponent', () => {
  let component: NewBaggageComponent;
  let fixture: ComponentFixture<NewBaggageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBaggageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBaggageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
