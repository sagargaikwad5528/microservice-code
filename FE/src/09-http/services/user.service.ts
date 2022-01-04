import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host:string = "https://jsonplaceholder.typicode.com/users";
  // private host:string = "http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  fetchAllUsers(){
    return this.http.get(this.host);
  }
  fetchUserById(id:number){}
  saveUser(user:any){
    return this.http.post(this.host, user);
  }
}
