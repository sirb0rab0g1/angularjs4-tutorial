import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//component
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { AdvanceComponent } from './advance/advance.component';

//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MdSidenavModule,
  MdCardModule,
  MdButtonModule,
  MdToolbarModule,
  MdTooltipModule,
  MdInputModule,
  MdSnackBarModule,
  MdProgressSpinnerModule,
  MdAutocompleteModule
} from '@angular/material';

//prime faces
import { AccordionModule, FieldsetModule } from 'primeng/primeng';

//rxjs
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';

//libraries
import { PushNotificationComponent } from 'ng2-notifications/ng2-notifications';

//facebook
import { FacebookModule } from 'ngx-facebook';

//router
const appRoutes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'basic', component: BasicsComponent },
  { path: 'advance', component: AdvanceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    AdvanceComponent,
    PushNotificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    AccordionModule,
    FieldsetModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdTooltipModule,
    FacebookModule.forRoot(),
    MdInputModule,
    MdSnackBarModule,
    MdProgressSpinnerModule,
    MdAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
