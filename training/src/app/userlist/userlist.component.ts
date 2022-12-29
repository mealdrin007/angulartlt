import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YService } from '../y.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  details: any = []

  constructor(private rout:Router,private service: YService,private http: HttpClient) { }

  ngOnInit(): void {
    this.view()
  }

  
  newuser(){
    this.rout.navigateByUrl("userdata/:id")
  }




  view() {
    this.service.Viewall().subscribe(res => {
      this.details = res
    })
  }



  deleteit(id:any) {
    this.service.Deleteit(id).subscribe(res => {
      this.ngOnInit()
    })

  }
  

  edit(){

  }
}
