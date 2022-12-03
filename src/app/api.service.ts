import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //URL to Django server
  baseurl =  'http://dcogiel.pythonanywhere.com' //'http://127.0.0.1:8000' 
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  //Insert your API calls here.
  getAllMovies(): Observable<any> {
    return this.http.get(this.baseurl + '/movies/',
    {headers: this.httpHeaders, withCredentials:true});
  }

  getOneMovie(id: number): Observable<any> {
    return this.http.get(this.baseurl + '/movies/' + id + "/", 
    {headers: this.httpHeaders, withCredentials:true});
  }
  
  updateMovie(movie: any): Observable<any> {
    
    const body = {id:movie.id, title: movie.title, description: movie.description, year: movie.year}
    return this.http.put(this.baseurl + "/movies/" + movie.id + "/", 
    body,
    {headers: {'Content-Type': 'application/json'}, withCredentials:true});
  }
  
  addMovie(movie: any): Observable<any> {
   
    const body = {id:movie.id, title: movie.title, description: movie.description, year: movie.year}
    return this.http.post(this.baseurl + "/movies/", 
    body,
    {headers: {'Content-Type': 'application/json'}, withCredentials:true});
  }

  deleteMovie(id: number): Observable<any> {
   
    return this.http.delete(this.baseurl + "/movies/" + id + "/", 
    {headers: {'Content-Type': 'application/json'}, withCredentials:true});
  }

  loginUser(username: String, password:String) : Observable<any>
  {
    const user = {username: username, password:password};
    return this.http.post(this.baseurl + "/api-token-auth/" , 
    user,
    {headers: {'Content-Type': 'application/json'}, withCredentials:true});
  }
  
}
