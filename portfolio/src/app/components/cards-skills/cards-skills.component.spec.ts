import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSkillsComponent } from './cards-skills.component';

describe('CardsSkillsComponent', () => {
  let component: CardsSkillsComponent;
  let fixture: ComponentFixture<CardsSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsSkillsComponent]
    });
    fixture = TestBed.createComponent(CardsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
