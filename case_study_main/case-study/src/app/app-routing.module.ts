import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilityComponent} from "./component/facility/facility.component";
import {HomeFuramaComponent} from "./component/home-furama/home-furama.component";


const routes: Routes = [
  {path: 'facility', component: FacilityComponent},
  {path: 'home', component: HomeFuramaComponent},
  {path: '', component: HomeFuramaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
