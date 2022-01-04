import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/15-flight-booking/service/admin.service';
import { AdminPageComponent } from '../admin-page/admin-page.component';

@Component({
  selector: 'app-modify-flight',
  templateUrl: './modify-flight.component.html',
  styleUrls: ['./modify-flight.component.css']
})
export class ModifyFlightComponent {


  modifyFlight: FormGroup;
  constructor(private adminService: AdminService,private adminpage:AdminPageComponent) {
    this.modifyFlight = new FormGroup({
      id: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      fromdesg: new FormControl("", [Validators.required]),
      todesg: new FormControl("", [Validators.required]),
      status: new FormControl("", [Validators.required]),
      flightnumber: new FormControl("", [Validators.required]),
      startdateTime: new FormControl("", [Validators.required]),
      enddateTime: new FormControl("", [Validators.required]),
      noofrows: new FormControl("", [Validators.required]),
      instrument: new FormControl("", [Validators.required]),
      schedule: new FormControl("", [Validators.required]),
      mealtype: new FormControl("", [Validators.required]),
      businessclassseats: new FormControl("", [Validators.required]),
      nonbusinessclassseats: new FormControl("", [Validators.required]),
    });

  }

  callFlightByID() {
    if (this.modifyFlight.value.id) {
      this.adminService.getFlightByID(this.modifyFlight.value.id)
      .subscribe(res => {
        // b = JSON.parse(res);
        console.log(res);
        this.modifyFlight.get("name")?.setValue(JSON.parse(res).name);
        this.modifyFlight.get("price")?.setValue(JSON.parse(res).price);
        this.modifyFlight.get("startdateTime")?.setValue(JSON.parse(res).startdateTime);
        this.modifyFlight.get("enddateTime")?.setValue(JSON.parse(res).enddateTime);
        this.modifyFlight.get("fromdesg")?.setValue(JSON.parse(res).fromdesg);
        this.modifyFlight.get("todesg")?.setValue(JSON.parse(res).todesg);
        this.modifyFlight.get("status")?.setValue(JSON.parse(res).status);
        this.modifyFlight.get("flightnumber")?.setValue(JSON.parse(res).flightnumber);
        this.modifyFlight.get("noofrows")?.setValue(JSON.parse(res).noofrows);
        this.modifyFlight.get("instrument")?.setValue(JSON.parse(res).instrument);
        this.modifyFlight.get("schedule")?.setValue(JSON.parse(res).schedule);
        this.modifyFlight.get("mealtype")?.setValue(JSON.parse(res).mealtype);
        this.modifyFlight.get("businessclassseats")?.setValue(JSON.parse(res).businessclassseats);
        this.modifyFlight.get("nonbusinessclassseats")?.setValue(JSON.parse(res).nonbusinessclassseats);
        console.log(this.modifyFlight);
      }, error => {
        alert("Flight not found");
        console.log('oops', error);
      });
    }
  }
  
  testmodify() {
    this.adminService.modifyFlight(this.modifyFlight.value)
      .subscribe(data => {
        console.log(">>>", data);
        alert("Flight has been Modified Name : " + this.modifyFlight.value.name + " Status : " + data);
        this.adminpage.loadAllFlights();
        this.modifyFlight.get("id")?.setValue("");
        this.modifyFlight.get("name")?.setValue("");
        this.modifyFlight.get("price")?.setValue("");
        this.modifyFlight.get("dateTime")?.setValue("");
        this.modifyFlight.get("fromdesg")?.setValue("");
        this.modifyFlight.get("todesg")?.setValue("");
        this.modifyFlight.get("status")?.setValue("");
        this.modifyFlight.get("flightnumber")?.setValue("");
        this.modifyFlight.get("noofrows")?.setValue("");
        this.modifyFlight.get("instrument")?.setValue("");
        this.modifyFlight.get("schedule")?.setValue("");
        this.modifyFlight.get("mealtype")?.setValue("");
        this.modifyFlight.get("businessclassseats")?.setValue("");
        this.modifyFlight.get("nonbusinessclassseats")?.setValue("");
      });
  }

}
