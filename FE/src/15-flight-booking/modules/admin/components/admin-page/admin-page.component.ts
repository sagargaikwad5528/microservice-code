import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminService } from 'src/15-flight-booking/service/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  flightList:any;
  constructor(private adminService:AdminService,private router: Router) { }
  ngOnInit(): void {
    this.loadAllFlights();
    let role=localStorage.getItem("role");
    if(role!="" && role!="admin"){
      alert("Not authorized!");
      this.router.navigate(["/","login"]);
    }
  }

  loadAllFlights(){
    this.adminService.getAllFlights()
    .subscribe((res: any) => {
      console.log(res);
      this.flightList=res;
    }, error => {
      alert("Error");
      console.log('oops', error);
    });
  }
}
