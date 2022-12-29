import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YService } from '../y.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../model/model.module';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  a:any;
  taskObj: Task = new Task();

  id1: string ="";
  name1: string = '';
  email1: string = '';
  status1: string = '';
  color = "grey";
  id:any='';
  constructor(private http: HttpClient, private route: Router, private service: YService, private rou: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.id=this.rou.snapshot.params['id']
    this.service.getone(this.rou.snapshot.params['id']).subscribe((result => {
      this.id1 = result.id
      this.name1 = result.name
      this.email1 = result.email
      this.status1 = result.status
    }))
  }



  add() {

    this.taskObj.id = this.id1
    this.taskObj.name = this.name1
    this.taskObj.email = this.email1
    this.taskObj.status = this.status1
    console.log(this.taskObj.id);

    this.service.addTask(this.taskObj).subscribe(res => {
      this.route.navigateByUrl('userlist')
      
    })

  }


  update() {
    this.taskObj.id = this.id1
    this.taskObj.name = this.name1
    this.taskObj.email = this.email1
    this.taskObj.status = this.status1
    console.log(this.taskObj);
    this.service.updateit(this.taskObj).subscribe(res => {
      this.route.navigateByUrl('userlist')
    })
  }

  backycolor() {
    if (this.status1 == "Active") {
      this.color = "green";
    }
    else {
      this.color = "red"
    }
  }

}


