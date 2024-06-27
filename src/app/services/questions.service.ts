import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private _http:HttpClient) { }
  public getQuestionsOfQuize(qid){
    return this._http.get(`${baseUrl}/question/quize/all/${qid}`)
  }
  public getQuestionsOfQuizeForTest(qid){
    return this._http.get(`${baseUrl}/question/quize/all/${qid}`)
  }
  public addQuestion(question){
    console.log(question)
    return this._http.post(`http://localhost:8080/question/`,question)

  }
  public deleteQuestion(qid){
  
  return this._http.delete(`http://localhost:8080/question/${qid}`)
}
}
