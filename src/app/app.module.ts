import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { SeasenClockComponent } from './cmps/seasen-clock/seasen-clock.component';
import { CountDownComponent } from './cmps/count-down/count-down.component';
import { MouseTrackerComponent } from './cmps/mouse-tracker/mouse-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasenClockComponent,
    CountDownComponent,
    MouseTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
