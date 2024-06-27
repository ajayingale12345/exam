import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quize',
  templateUrl: './add-quize.component.html',
  styleUrls: ['./add-quize.component.css']
})
export class AddQuizeComponent implements OnInit {
  categories=[
  
    
  ]
  quizeData={
    title:'',
    description:'',
    maxMarks:'',
  numberOfQuestions:'',
  active:true,
  catagory:{
    cid:''
  }
}
    
  
  constructor( private _categoryService:CategoryService,private _snack:MatSnackBar,private _quizeService:QuizService) { }

  ngOnInit(): void {
    this._categoryService.catagorirs().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(this.categories)
      },
      (error)=>{
        console.log(error)
        Swal.fire('error','server Error',error)
      }
      )
  }
    addQuize(){
      if(this.quizeData.title.trim()==''||this.quizeData==null){
      this._snack.open('Title Required','',{
        duration:3000
      })
  return
      }
      this._quizeService.addQuize(this.quizeData).subscribe((data)=>{
        Swal.fire("success",'quize is','success')
        window.location.href='/admin/quizes/'
      },
      (error)=>{
        console.log(error)
        Swal.fire('Error ','Server Error','error')
      }
      )

      
    }
  
}
