import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-catagories',
  templateUrl: './view-catagories.component.html',
  styleUrls: ['./view-catagories.component.css']
})
export class ViewCatagoriesComponent implements OnInit {
 categories=[]
  constructor(private _category:CategoryService) { }

  ngOnInit(): void {
    this._category.catagorirs().subscribe((data:any)=>{
      this.categories=data
      console.log(this.categories)
    },
    (error)=>{
      console.log(error);
      Swal.fire("error")
    }
    )
  }

}
