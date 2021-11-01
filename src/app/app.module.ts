import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {CompareComponent} from './components/compare/compare.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TopComponentComponent } from './component/top-component/top-component.component';
import { TopCompareComponent } from './components/top-compare/top-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareComponent,
    TopComponentComponent,
    TopCompareComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatOptionModule,
        MatAutocompleteModule,
        MatCardModule,
        MatButtonModule,
        ShareButtonsModule,
        ShareIconsModule,
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
