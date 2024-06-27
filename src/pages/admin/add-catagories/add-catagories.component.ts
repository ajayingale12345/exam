import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-catagories',
  templateUrl: './add-catagories.component.html',
  styleUrls: ['./add-catagories.component.css']
})
export class AddCatagoriesComponent implements OnInit {
   category={
     title:'',
     description:''
   }
  constructor(private _categoryService:CategoryService,private _snak:MatSnackBar,_router:Router) { }

  ngOnInit(): void {
  }
 

   formSubmit(){
     if(this.category.title.trim()==''|| this.category==null){
         this._snak.open("Title Required",'',{
           duration:200
         })
      return
     }
     this._categoryService.addNewCategory(this.category).subscribe(
       (data)=>{
         Swal.fire('success','catagory is Added','success')
         window.location.href='admin/catagories'
         
       },
       (error)=>{
         console.log(error)
         Swal.fire('Error ','Server Error','error')
       }
     )
      
   }
}
