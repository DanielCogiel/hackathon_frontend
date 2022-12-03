import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  token!:string
  roomNumber!: number;
  //URL to Django server
  baseurl =  'http://dcogiel.pythonanywhere.com'
  httpHeaders = new HttpHeaders ({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  //Insert your API calls here.
  loginUser(username: String, password:String) : Observable<any>
  {
    const user = {username: username, password:password};
    return this.http.post(this.baseurl + "/api-token-auth/" , 
    user,
    {headers: {'Content-Type': 'application/json'}, withCredentials:true});
  }

  getEvents(): Observable<any> {
    var httpHeaders1= new HttpHeaders ({'Content-Type': 'application/json',"Authorization": "Token " + this.token})
    console.log(this.token)
    return this.http.get(this.baseurl + '/events/tagRelated/', 
    {headers: httpHeaders1, withCredentials:true});
  
  }

  addEvent(event: Event): Observable<any> {
    var httpHeaders1= new HttpHeaders ({'Content-Type': 'application/json',"Authorization": "Token " + this.token})
    const body = event;
    return this.http.post(this.baseurl + '/events/', 
    body,
    {headers: httpHeaders1, withCredentials:true});
  }


  getRoomNumber(): Observable<any> {
    var httpHeaders1= new HttpHeaders ({'Content-Type': 'application/json',"Authorization": "Token " + this.token})
    console.log(this.token)
    return this.http.get(this.baseurl + '/rooms/matchRoom/', 
    {headers: httpHeaders1, withCredentials:true});
  }
  
  getTags(): Observable<any> {
    var httpHeaders1= new HttpHeaders ({'Content-Type': 'application/json',"Authorization": "Token " + this.token})
    console.log(this.token)
    return this.http.get(this.baseurl + '/userRelatedTags/', 
    {headers: httpHeaders1, withCredentials:true});
  }

  getIntrests(): Observable<any> {
    var httpHeaders1= new HttpHeaders ({'Content-Type': 'application/json',"Authorization": "Token " + this.token})
    console.log(this.token)
    return this.http.get(this.baseurl + '/userRelatedPreferences/', 
    {headers: httpHeaders1, withCredentials:true});
  }

}
