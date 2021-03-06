import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KhanComponent } from './khan/khan.component';
import { KhanDetailsComponent } from './khan-details/khan-details.component';

@NgModule({
  declarations: [
    AppComponent,
    KhanComponent,
    KhanDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
