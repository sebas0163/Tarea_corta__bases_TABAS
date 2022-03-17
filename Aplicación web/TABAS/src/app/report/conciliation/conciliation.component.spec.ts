import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliationComponent } from './conciliation.component';

describe('ConciliationComponent', () => {
  let component: ConciliationComponent;
  let fixture: ComponentFixture<ConciliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConciliationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
