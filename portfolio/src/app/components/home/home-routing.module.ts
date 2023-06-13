import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path: '',
        component:PresentationComponent
      },
      {
        path:'skills',
        component:SkilsComponent
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
