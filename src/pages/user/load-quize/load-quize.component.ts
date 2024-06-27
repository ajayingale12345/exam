import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quize',
  templateUrl: './load-quize.component.html',
  styleUrls: ['./load-quize.component.css']
})
export class LoadQuizeComponent implements OnInit {
  catId;
  quizes;
  constructor(private _route:ActivatedRoute,private _quizeService:QuizService ) { }

  ngOnInit(): void {
    this.catId=this._route.snapshot.params['catId'];
    this._route.params.subscribe((parms)=>{
     this.catId=parms['catId'];
     console.log(this.catId)
     
     if(this.catId==0){
      this._quizeService.getActiveQuizes().subscribe((data)=>{
        this.quizes=data
        console.log(data)
      },
      (error)=>
      {
        alert("Error in laoding al the Quizes")
      })
      }
       else{
  console.log ('loaad Specific Quize')
  console.log(this.catId)
    this.quizes=this._quizeService.getActiveQuizesOfcatagory(this.catId).subscribe((data)=>{
      this.quizes=data
    })
       }
    })
   
  
  }

}
