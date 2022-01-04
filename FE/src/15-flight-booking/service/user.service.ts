import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private host:string = "http://USER/v1/api/flights/user/";
  // private host:string = "http://localhost:9090/user/v1/api/flights/user";
  // private host:string = "http://ec2-3-145-173-139.us-east-2.compute.amazonaws.com:8081/v1/api/flights/user";
  private host:string = "http://localhost:8081/v1/api/flights/user";
  


  constructor(private http:HttpClient) { }

  searchFlights(id:any) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.host+"/searchFlight",id,{headers:headers,responseType: 'text'});
  }

  getTransHistoryFlights(id:any) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.host+"/getBookingHistory/"+id,{headers:headers,responseType: 'text'});
  }
  
  getFlightByID(id:number) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.host+"/getFlight/"+id,{headers:headers,responseType: 'text'});
  }

  bookFlights(id:any) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.host+"/booking",id,{headers:headers,responseType: 'text'});
  }

  cancelFlights(id:string) {
    const headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'))
    .set('content-type','application/json');
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.host+"/cancelBooking",id,{headers:headers,responseType: 'text'});
  }
 
}
