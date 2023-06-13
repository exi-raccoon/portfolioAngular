import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:PresentationComponent
      },
      {
        path:'skills',
        component:SkillsComponent
      },
      {
        path:'experiences',
        component:ExperienceComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
