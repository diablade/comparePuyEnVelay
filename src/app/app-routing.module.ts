import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompareComponent} from './components/compare/compare.component';
import {TopComponentComponent} from './component/top-component/top-component.component';

const routes: Routes = [
  {path: ':slug', component: CompareComponent},
  {path: '/top100/', component: TopComponentComponent},
  {path: '', component: CompareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
