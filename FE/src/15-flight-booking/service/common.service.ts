import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private adminHost:string = "http://localhost:8082/authenticate";
  private userHost:string = "http://localhost:8081/authenticate"; 
  // private adminHost:string = "http://ec2-3-145-173-139.us-east-2.compute.amazonaws.com:8082/authenticate";
  // private userHost:string = "http://ec2-3-145-173-139.us-east-2.compute.amazonaws.com:8081/authenticate"; 
  // private zuulhost:string = "http://ec2-3-145-173-139.us-east-2.compute.amazonaws.com:9090/authenticate";
  // private zuulhost:string = "http://localhost:9090/authenticate";

  constructor(private http:HttpClient) { }

  validateAdminUser(data: any){
    // return this.http.post(this.zuulhost, data);
    return this.http.post(this.adminHost, data);
  } 
  validateUser(data: any){
    // return this.http.post(this.zuulhost,data);
    return this.http.post(this.userHost,data);
  } 
}
