import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quize',
  templateUrl: './update-quize.component.html',
  styleUrls: ['./update-quize.component.css']
})
export class UpdateQuizeComponent implements OnInit {

    qId=0;
  quize=null;
  categories=null;

  constructor(private  _route:ActivatedRoute,private _quizeService:QuizService,private _categoryService:CategoryService,private _router:Router) { }

  ngOnInit(): void {
  this.qId=this._route.snapshot.params['qid']
  this._quizeService.getQuize(this.qId).subscribe(
    (data)=>{
   this.quize=data;
    },
    (error)=>{
      console.log(error);
      Swal.fire("error")
    }
  )
  this._categoryService.catagorirs().subscribe(
    (data)=>{
   this.categories=data;
    },
    (error)=>{
      console.log(error);
      Swal.fire("error in loading Category")
    }
  )

  

  }
  updateQuize(){
    this._quizeService.updateQuize(this.quize).subscribe(
      (data=>{
    Swal.fire("Successfully updated").then((e)=>{
   this._router.navigate(['/admin/quizes']);
    })
    
    }),
    (error)=>{
      console.log(error);
      Swal.fire("error in loading udateQuize")
    }
    )
  }

}
