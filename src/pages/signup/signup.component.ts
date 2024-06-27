import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    public user={
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      

    }
    constructor( private userService: UserService,private _snack:MatSnackBar) { }
    ngOnInit(): void {
    }
  formSubmit(){
  console.log("formSubmit called ")
if(this.user.username==""|| this.user.email==""||this.user.firstName==""|| this.user.lastName==""||
this.user.password==""|| this.user.phone==""){
this._snack.open("Please fill the required Details ",'ok',{
  duration:500
})
return

} else {

  this.userService.adduser(this.user).subscribe(
    (data)=>{
      console.log(data)
     if(data==null){
      this._snack.open("Please enter Valid Data ",'ok',{
        duration:3000
        
      })
     }else
     Swal.fire("Success","Successfully registered","success")

    },
    (error)=>{
      this._snack.open("Something went wrong ",'ok',{
        duration:3000
      })
    }
  )
}
  
  }
 

  

}
