import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user=""
pass=""
  constructor(private rout:Router) { }

  ngOnInit(): void {
  }
signin(){
  if(this.user=="admin" && this.pass=="admin"){
      this.rout.navigateByUrl("userlist")
  }
}
}
