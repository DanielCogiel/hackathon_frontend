import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent {
   profileForm = this._formBuilder.group({
   username: [null, Validators.required],
   password: [null, Validators.required],
  });
  
  username!: String
  password!: String

  public token!: string    // dodawaj do post put get :))

  routerLink: String = ''

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    //private user: {username: string, password: string},
    private http: HttpClient,
    private api: ApiService
  ) {}

  baseurl =  'http://dcogiel.pythonanywhere.com'
  openRegisterWindow(): void {
    this._router.navigateByUrl('register');
  }
  
  login() {
    this.postButtonClicked();
  }

  postButtonClicked = () => {
    this.api.loginUser(this.username, this.password).subscribe(
      data => {
        this.api.token = data.token
        this._router.navigate(['/plan'])
      
      }, error => {
        console.log(error);
      }
    );
  }


}
