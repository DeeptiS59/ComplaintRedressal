import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { pincodeList } from '../pincode.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:any={};
  pincodeList:number[]=pincodeList;
  constructor(private loginService: LoginService, private router: Router) { }
  onSubmit() {
    if(this.user.role!="manager") {
      this.user.pincode=null;
    }
    this.loginService.registerUser(this.user).subscribe({
      error:(res:any) => {
        alert("Could not create user. Duplicate Username")
      },
      next:(res: any[]) => {
      alert("New User Created!")
      
   }});
  }
  
}