import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-skills',
  templateUrl: './cards-skills.component.html',
  styleUrls: ['./cards-skills.component.scss']
})
export class CardsSkillsComponent {
  @Input() skilldata:any;
}
