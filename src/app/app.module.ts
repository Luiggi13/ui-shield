import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomButtonModule } from '@cllansola/shield-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
