import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelofferComponent } from './traveloffer.component';

describe('TravelofferComponent', () => {
  let component: TravelofferComponent;
  let fixture: ComponentFixture<TravelofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
