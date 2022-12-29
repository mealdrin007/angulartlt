import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './model/model.module';

@Injectable({
  providedIn: 'root'
})
export class YService {

  serviceURL : string ;

  constructor(private http:HttpClient) { 

    this.serviceURL = "http://localhost:3000/user"
  }

 

  addTask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.serviceURL,task);
  }


  Viewall():Observable<Task>{
    return this.http.get<Task>(this.serviceURL)
  }




  Deleteit(id:any):Observable<any>{
    return this.http.delete<any>(this.serviceURL+'/'+id)

  }
  

 
  getone(id:any):Observable<Task>{
    return this.http.get<any>(this.serviceURL+'/'+id)

  }
  

  updateit(task:Task):Observable<Task>{
    return this.http.patch<Task>(this.serviceURL+'/'+task.id,task)

  }

 



}

