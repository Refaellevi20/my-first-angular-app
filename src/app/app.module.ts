import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { SeasenClockComponent } from './cmps/seasen-clock/seasen-clock.component';
import { CountDownComponent } from './cmps/count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasenClockComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
