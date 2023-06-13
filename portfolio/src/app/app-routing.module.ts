import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    children:[
      {
        path:'home',
        loadChildren:() => import('./components/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path:'', redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
