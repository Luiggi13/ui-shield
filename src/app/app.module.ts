import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShieldParModule, ShieldHeadingModule } from '@cllansola/shield-ui';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShieldParModule, ShieldHeadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
