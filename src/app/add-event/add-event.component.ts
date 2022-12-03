import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Event } from '../event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  eventForm = this._formBuilder.group({
   day: [null, Validators.required],
   time: [null, Validators.required],
   eventName: [null, Validators.required],
   tag: [null, Validators.required]
   });


   day!:string
   time!: string
   eventName!: string
   tag!:string
   event!:Event

    constructor (
    private readonly _formBuilder: FormBuilder,
    private readonly api: ApiService) 
    {}

    createNewEvent() {
      this.event = {day:this.day, time:this.time, eventName:this.eventName, tag:this.tag};
    }

    addEvent(){
      this.createNewEvent();
      console.log(this.event);
      this.api.addEvent(this.event).subscribe(
        data=>{
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
    }



}
