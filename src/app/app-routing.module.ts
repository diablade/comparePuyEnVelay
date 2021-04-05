import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompareComponent} from './components/compare/compare.component';

const routes: Routes = [
  {path: 'avec/:slug', component: CompareComponent},
  {path: '', component: CompareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
