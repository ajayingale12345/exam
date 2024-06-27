import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  public Editor = ClassicEditor;
qId;
qTitle;
questions={
  
  content:'',

option1:'',
option2:'',
option3:'',
option4:'',
answer:'',
quize:{

},

};
  constructor(private _route:ActivatedRoute,private _questionService:QuestionsService,private _router:Router) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    this.questions.quize['qid']=this.qId;
  }
    addQuestion(){
     if(this.questions.content.trim()==''||this.questions.content==null){
        return
     }
     if(this.questions.option1.trim()==''||this.questions.option1==null){
      return
   }
   if(this.questions.option1.trim()==''||this.questions.option1==null){
    return
 }
      this._questionService.addQuestion(this.questions).subscribe((data)=>{
        console.log(this.questions)
        Swal.fire('success','question Added','success')
        this._router.navigate(['/admin/view-questions/'+this.qId +'/'+  this.qTitle])
      },
      (error)=>{
        Swal.fire('Error','Error While Adding The Questions','error')
      })
    }
}
