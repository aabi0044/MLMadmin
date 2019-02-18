import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:any;
password:any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(){
    if(this.email=='admin@email.com' && this.password=='admin'){
     this.router.navigate(['dashboard']) ;
    }
  }

}
