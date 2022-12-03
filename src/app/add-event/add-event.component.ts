import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  eventForm = this._formBuilder.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
   });


   username!:String
   password!: String
    constructor (
    private readonly _formBuilder: FormBuilder) 
    {}


}
