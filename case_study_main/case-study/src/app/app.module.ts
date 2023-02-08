import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeFuramaComponent } from './component/home-furama/home-furama.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FacilityComponent } from './component/facility/facility.component';
import { CreateComponent } from './component/facility/create/create.component';
import { UpdateComponent } from './component/facility/update/update.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeFuramaComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    FacilityComponent,
    CreateComponent,
    UpdateComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
