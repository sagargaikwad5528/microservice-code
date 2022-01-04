import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/15-flight-booking/service/admin.service';
import { AdminPageComponent } from '../admin-page/admin-page.component';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {

  

  addFlight: FormGroup;
  constructor(private adminService:AdminService,private adminpage:AdminPageComponent) { 
    this.addFlight = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      flightnumber: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      startdateTime: new FormControl("", [Validators.required]),
      fromdesg: new FormControl("", [Validators.required]),
      todesg: new FormControl("", [Validators.required]),
      status: new FormControl("", [Validators.required]),
      enddateTime: new FormControl("", [Validators.required]),
      noofrows: new FormControl("", [Validators.required]),
      instrument: new FormControl("", [Validators.required]),
      schedule: new FormControl("", [Validators.required]),
      mealtype: new FormControl("", [Validators.required]),
      businessclassseats: new FormControl("", [Validators.required]),
      nonbusinessclassseats: new FormControl("", [Validators.required]),
    });

  }

  testadd() {
this.addFlight.get("price")?.setValue(parseFloat(this.addFlight.get("price")?.value));
console.log(">>>",this.addFlight.value);
      this.adminService.addFlight(this.addFlight.value)
      .subscribe( data => {
        alert("Flight has been added Name : "+this.addFlight.value.name+" Status : "+data);
        this.addFlight.get("name")?.setValue("");
        this.addFlight.get("price")?.setValue("");
        this.addFlight.get("startdateTime")?.setValue("");
        this.addFlight.get("fromdesg")?.setValue("");
        this.addFlight.get("todesg")?.setValue("");
        this.addFlight.get("status")?.setValue("");
        this.addFlight.get("flightnumber")?.setValue("");
        this.addFlight.get("enddateTime")?.setValue("");
        this.addFlight.get("noofrows")?.setValue("");
        this.addFlight.get("instrument")?.setValue("");
        this.addFlight.get("schedule")?.setValue("");
        this.addFlight.get("mealtype")?.setValue("");
        this.addFlight.get("businessclassseats")?.setValue("");
        this.addFlight.get("nonbusinessclassseats")?.setValue("");
        this.adminpage.loadAllFlights();
      });
    }

}
