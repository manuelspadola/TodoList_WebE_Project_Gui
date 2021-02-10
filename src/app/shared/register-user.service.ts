import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  constructor(private http:HttpClient) { }

  public doRegistration(user: any){
    return this.http.post("http://localhost:8080/create/benutzer/",user,{responseType:'text' as 'json'});
  }

  doLogin(user: any) {
    return this.http.post("http://localhost:8080/login/benutzer/",user,{responseType:'text' as 'json'});
  }

}
