import { Component, OnInit } from '@angular/core';

import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-quizes',
  templateUrl: './show-quizes.component.html',
  styleUrls: ['./show-quizes.component.css']
})
export class ShowQuizesComponent implements OnInit {
  constructor(private _quizeService:QuizService) { }
  quizes=[]
  ngOnInit(): void {
    this._quizeService.quizes().subscribe((data:any)=>{
      this.quizes=data
      console.log(this.quizes)
    }),
    (error)=>{
      console.log(error)
      Swal.fire('Error','error while loadinf the data','error')
    }
  }
  deleteQuize(qid){
    Swal.fire({
      icon:'info',
      title:'Are you sure want to delete',
      confirmButtonText:'delete',
      showCancelButton :true
      }).then((result)=>{
        if(result.isConfirmed){
          this._quizeService.deleteQuize(qid).subscribe((data)=>{
            this .quizes=this.quizes.filter((quize)=>{quize.qid!=qid})
            Swal.fire('Success','Quize deleted','success')
            window.location.href='/admin/quizes/'
          },
          (error)=>{
            console.log(error)
            Swal.fire('Error','error while loadinf the data','error')
          })
         
        }
      })
    
  }
    
  
  

 
}
