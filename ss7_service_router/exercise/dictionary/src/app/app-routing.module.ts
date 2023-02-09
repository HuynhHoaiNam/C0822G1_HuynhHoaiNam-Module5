import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {ErrorPassComponent} from "./error-pass/error-pass.component";


const routes: Routes = [
  {path: "", component: DictionaryPageComponent},
  {path: "detail/:word", component: DictionaryDetailComponent},
  {path: "**", component: ErrorPassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
