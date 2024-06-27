import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor( private http:HttpClient) { }

  public adduser(user:any){
    console.log(user);
    return this.http.post (`${baseUrl}/test`,user)
  }
  
}
