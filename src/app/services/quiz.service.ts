import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }
  public quizes(){
    return this._http.get(`${baseUrl}/quize/`)
  }
  public addQuize(quize){
    console.log(quize)
    return this._http.post(`${baseUrl}/quize/`,quize)
  }
  public deleteQuize(qid){
    return this._http.delete(`${baseUrl}/quize/${qid}`)
  }
  public getQuize(qid){
    return this._http.get(`${baseUrl}/quize/${qid}`)
  }
  public updateQuize(quize){
      return this._http.put(`${baseUrl}/quize/`,quize);
  }
  public getQuizeOfcatagory(cid){
    return this._http.get(`${baseUrl}/quize/catagory/${cid}`)
  }
  public  getActiveQuizes(){
    return this._http.get(`${baseUrl}/quize/active`);
  }
  public getActiveQuizesOfcatagory(cid){
    return this._http.get(`${baseUrl}/quize/catagory/active/${cid}`);
  }
}
