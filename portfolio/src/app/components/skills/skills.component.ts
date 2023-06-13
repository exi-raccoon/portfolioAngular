import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  cardskills:string[]=["HTML", "CSS", "JavaScript", "IDK", "Anglais"];
}
