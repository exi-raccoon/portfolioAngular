import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-experience',
  templateUrl: './cards-experience.component.html',
  styleUrls: ['./cards-experience.component.scss']
})
export class CardsExperienceComponent {
  @Input() experiencedata:any
}
