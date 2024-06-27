import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  }
  ngOnInit(): void {
  }
  constructor(private snack: MatSnackBar, private loginService: LoginService) { }
  onLogin() {
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      this.snack.open("Username is required", '', {
        duration: 3000
      })
      return
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open("password is required", '', {
        duration: 3000
      })
      return
    }
    
    
    this.loginService.generateToken(this.loginData).subscribe((data: any) => {
      console.log("generateToken")
      this.loginService.loginUser(data.token)
      this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log(user);
          if(this.loginService.getUserRole()=="ADMIN"){
         window.location.href='/admin'
          }
          else if (this.loginService.getUserRole()=="NORMAL"){
            //Normal User Dashborad
            window.location.href='/user/0'
          }
          else {
            this.loginService.logout();
          }
        },
        (error) => { 
          
          console.log(error)
        });
 

      },
      (error) => { 
        console.log(Error);
        console.log(error)
      });
    }
    
}