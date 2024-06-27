import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  catagories;
  constructor(private _catagoryService:CategoryService) { }

  ngOnInit(): void {
     this.catagories=this._catagoryService.catagorirs ().subscribe((data)=>{
       this.catagories=data
       console.log (this.catagories)

     })
  }

}
