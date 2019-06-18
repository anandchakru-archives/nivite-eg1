import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseliComponent } from './carouseli.component';

describe('CarouseliComponent', () => {
  let component: CarouseliComponent;
  let fixture: ComponentFixture<CarouseliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouseliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouseliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
