import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  id:any;
  index:any;
  image:any;
  show:boolean=true;
  totalmany:number=0;
  ispaymentDone:boolean=false;
  editId!: number;
  isaddmin = false;
  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get('http://localhost:3000/users')
  }

  getdatabyId(id:number){
    return this.http.get('http://localhost:3000/users' + '/' + id);
  }

  pushData(data:any){
    return this.http.post('http://localhost:3000/users',data);
  }

  deleteData(id :any){
    return this.http.delete('http://localhost:3000/users' + '/' +id)
  }

  updateData(id:any,data:any){
    return this.http.put('http://localhost:3000/users' + '/' +id,data);
  }
}
