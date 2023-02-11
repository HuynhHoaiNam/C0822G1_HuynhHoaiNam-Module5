import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilityComponent} from "./component/facility/facility.component";
import {HomeFuramaComponent} from "./component/home-furama/home-furama.component";
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {CreateComponent} from "./component/facility/create/create.component";
import {UpdateCustomerComponent} from "./component/customer/update-customer/update-customer.component";
import {UpdateComponent} from "./component/facility/update/update.component";


const routes: Routes = [
  {path: 'home', component: HomeFuramaComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'listCustomer', component: ListCustomerComponent},
  {path: 'createFacility', component: CreateComponent},
  {path: 'updateFacility', component: UpdateComponent},
  {path: 'createCustomer', component: CreateCustomerComponent},
  {path: 'updateCustomer', component: UpdateCustomerComponent},
  {path: '', component: HomeFuramaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
