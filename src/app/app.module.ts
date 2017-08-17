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
  MdTooltipModule
} from '@angular/material';

//prime faces
import { AccordionModule, FieldsetModule } from 'primeng/primeng';


//ngx-bootstrap

//libraries
import { PushNotificationComponent } from 'ng2-notifications/ng2-notifications';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
