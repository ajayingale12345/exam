import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private _http:HttpClient) { 
  }
  public catagorirs(){
    console.log("AAjay")
    return this._http.get(`${baseUrl}/category/`)
  }
  public addNewCategory(category){
    return this._http.post(`${baseUrl}/category/`,category)

  }

}
