import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public HttpClient: HttpClient) { }
  public registerUser(user:any):any{
    let url = "http://localhost:8080/users";  
    return this.HttpClient.post(url,user)
  }
  public login(user:any):any{
    let url = "http://localhost:8080/login";  
    return this.HttpClient.post(url,user)
  } 
  public changePassword(resetpwd:any):any{
    let url = "http://localhost:8080/resetpwd";  
    return this.HttpClient.post(url,resetpwd) 
  }
  public getUsers():any{
    let url = "http://localhost:8080/getUsers";
    return this.HttpClient.get(url);
  }
}
