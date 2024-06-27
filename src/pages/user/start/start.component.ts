import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
qid;
questions;
marksGot=0;
correctAnswrs=0
attempted=0
i=0;
timer;
isSubmit=false

  constructor(private locationSt:LocationStrategy,private _route:ActivatedRoute,
              private _quistionService:QuestionsService) { }

  ngOnInit(): void {
    this.preventBackButton()
    this.qid=this._route.snapshot.params['qid']
    this.loadQuestions();
       
  }
  preventBackButton(){
    history.pushState(null,null,location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null,null,location.href)
    })
  }
  loadQuestions(){
    this._quistionService.getQuestionsOfQuize(this.qid).subscribe((data)=>{
   this.questions=data
   this.timer=this.questions.length*2*60
   this.questions.forEach(q => {
     q['givenAnswer']=''
      q['i']=this.i++;
     
   });
   console.log(this.questions)
   this.startTimer();
    },
    (error)=>{

    })

  }
  submitQuize(){
    Swal.fire({
      title:'Do  you want the Submit the quize?',
      showCancelButton:true,
      confirmButtonText: 'Submit',
   
     denyButtonText:`Don't Submit`,
    icon:'info' 

    
    }).then((e)=>{
      if(e.isConfirmed){
     
            this.evalQuizes() 
           
      }
    })
  }
  startTimer(){
   let t= window.setInterval(()=>{
    if(this.timer<=0){
      this.evalQuizes()
      clearInterval(t)
    }else{
      this.timer--
    }
    },1000)

  }
  getFormatedTime(){
    let mm=Math.floor(this.timer/60)
    let ss=this.timer-mm*60
    return`${mm} min :${ss} sec`
  }
  evalQuizes(){

    this.isSubmit=true
    console.log(this.questions)
       this.questions.forEach((q)=>
       {
         
         if(q.givenAnswer==q.answer){
           this.correctAnswrs++;
           console.log(this.questions[0].quize.maxMarks)
           let marksSingle=this.questions[0].quize.maxMarks/this.questions.length
           this.marksGot+=marksSingle
         }
         if(q.givenAnswer.trim()!=''){
           this.attempted++;

         }
        
       })
       console.log('Correct Answer:'+this.correctAnswrs)
         console.log('Marks Obtained :'+this.marksGot);
         console.log('Attempted:'+this.attempted);
  }



}
