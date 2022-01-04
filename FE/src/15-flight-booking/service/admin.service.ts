import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  // private host:string = "http://ADMIN/v1/api/flights/admin";
  // private host:string = "http://localhost:9090/admin/v1/api/flights/admin";
  // private host:string = "http://ec2-3-145-173-139.us-east-2.compute.amazonaws.com:8082/v1/api/flights/admin";
  private host:string = "http://localhost:8082/v1/api/flights/admin";
  
  
  constructor(private http:HttpClient) { }

  getAllFlights() {
    return this.http.get(this.host+"/getFlights");
  }

  blockFlight(id:any) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.host+"/blockFlight",id,{headers:headers,responseType: 'text'});
  }

  releaseFlight(id:any) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.host+"/releaseFlight",id,{headers:headers,responseType: 'text'});
  }

  removeFlight(id:any) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.delete(this.host+"/deleteFlight/"+id,{headers:headers,responseType: 'text'});
  }

  addFlight(id:any) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.host+"/addFlight",id,{headers:headers,responseType: 'text'});
  }

  modifyFlight(id:any) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.put(this.host+"/updateFlight",id,{headers:headers,responseType: 'text'});
  }

  getFlightByID(id:number) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.host+"/getFlight/"+id,{headers:headers,responseType: 'text'});
  }
}
