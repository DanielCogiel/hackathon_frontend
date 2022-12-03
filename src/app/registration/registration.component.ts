import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent {
    registrationForm = this._formBuilder.group({
    username: [null, Validators.required],
    name: [null, Validators.required],
    surname: [null, Validators.required],
    password: [null, Validators.required],
  });

    constructor(private readonly _formBuilder: FormBuilder) {
    }

}
