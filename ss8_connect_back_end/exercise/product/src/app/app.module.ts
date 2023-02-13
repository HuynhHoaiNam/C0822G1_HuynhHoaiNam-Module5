import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductUpdateComponent} from './product/product-update/product-update.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
