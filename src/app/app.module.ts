import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import "rxjs/add/operator/map";

import { AppComponent } from './app.component';
import { BoxModule } from "./box/box.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BoxModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
