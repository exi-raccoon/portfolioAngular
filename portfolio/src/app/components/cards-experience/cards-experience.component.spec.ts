import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsExperienceComponent } from './cards-experience.component';

describe('CardsExperienceComponent', () => {
  let component: CardsExperienceComponent;
  let fixture: ComponentFixture<CardsExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsExperienceComponent]
    });
    fixture = TestBed.createComponent(CardsExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
