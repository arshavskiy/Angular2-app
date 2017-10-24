import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    // templateUrl: '/app/events/events-list.component.html' //root index.html location
    template: `
    <div>
        <h1>Upcoming Angular2 events 2017</h1>
        <hr>
        <event-thumbnail #thumbnail [event]='event1'></event-thumbnail> 
        <h3>{{thumbnail.someProperty}}</h3>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
    </div>
    `
}) //[event] = gives the event object from event-thumbnail component access to event1
export class EventsListComponent {
    event1 = {
        id: 1,
        name: "Angular Connect",
        date: "10/12/2017",
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '608920',
            city: 'Jerusalem',
            country: 'Israel'
        }
    }
}