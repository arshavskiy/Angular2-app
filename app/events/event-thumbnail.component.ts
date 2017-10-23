import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class='well hoverwell thumbnail'>
    <h3>{{event.name}}</h3>
    <Br>
    <h4>Date: {{event.date}}</h4>
    <h4>Price: \${{ event.price }}</h4>
    <span> location {{event.location.address}}, {{event.location.city}}, {{event.location.country}}</span>
    <h4>
        <img src='{{event.imageUrl}}'>
    </h4>
</div>
    `
})
export class EventThumbnailComponent {
    @Input() event: any //event object

    someProperty: any = "some value" //to parent component

    logFoo() {
        console.log('foo')
    }

}