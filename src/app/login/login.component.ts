import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  message:string=null;
  pass:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email=='admin@gmail.com' && this.pass=="admin"){
      this.router.navigate(['/home']);
    }else{
      this.message="Invalid Email-id or Password";
    }
}
}
