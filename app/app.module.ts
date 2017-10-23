import { BrowserModule } from '@angular/platform-browser';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { NgModule } from '@angular/core';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }