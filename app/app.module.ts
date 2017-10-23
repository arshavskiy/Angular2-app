import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }