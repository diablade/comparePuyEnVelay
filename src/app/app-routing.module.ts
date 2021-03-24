import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompareComponent} from "./components/compare/compare.component";

const routes: Routes = [
  {path: '', component: CompareComponent},
  {path: 'avec/:slug', component: CompareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
