import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/15-flight-booking/service/user.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent {
  bookFlight: FormGroup;
  constructor(private userService: UserService) {
    this.bookFlight = new FormGroup({
      flightId: new FormControl("", [Validators.required]),
      flightName: new FormControl("", [Validators.required]),
      userName: new FormControl("",),
      price: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      dateTime: new FormControl("", [Validators.required]),
      fromdesg: new FormControl("", [Validators.required]),
      todesg: new FormControl("", [Validators.required]),
      noOfAdult: new FormControl("", [Validators.required]),
      noOfChild: new FormControl("", [Validators.required]),
      nameOfAdults: new FormControl("", [Validators.required]),
      nameOfChild: new FormControl("", [Validators.required]),
      tripType: new FormControl("",[Validators.required]),
      mealType: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required]),
    });
  }

  bookFlights() {
    if (this.bookFlight.value.flightId) {
      this.bookFlight.get("userName")?.setValue(localStorage.getItem("user"));
      console.log(">>>>>>>>>>"+this.bookFlight.value);
      this.userService.bookFlights(this.bookFlight.value)
      .subscribe(res => {
        console.log(res);
        alert(res);
        this.bookFlight.get("flightId")?.setValue("");
        this.bookFlight.get("flightName")?.setValue("");
        this.bookFlight.get("name")?.setValue("");
        this.bookFlight.get("price")?.setValue("");
        this.bookFlight.get("dateTime")?.setValue("");
        this.bookFlight.get("fromdesg")?.setValue("");
        this.bookFlight.get("todesg")?.setValue("");
        this.bookFlight.get("noOfAdult")?.setValue("");
        this.bookFlight.get("noOfChild")?.setValue("");
        this.bookFlight.get("nameOfAdults")?.setValue("");
        this.bookFlight.get("nameOfChild")?.setValue("");
        this.bookFlight.get("email")?.setValue("");
        this.bookFlight.get("mealType")?.setValue("");
        this.bookFlight.get("age")?.setValue("");
      }, error => {
        alert("Failed to book ticket");
        console.log('oops', error);
      });
    }
  }

  callFlightByID() {
    if (this.bookFlight.value.flightId) {
      this.userService.getFlightByID(this.bookFlight.value.flightId)
      .subscribe(res => {
        // b = JSON.parse(res);
        console.log(res);
        // this.bookFlight.get("name")?.setValue(JSON.parse(res).name);
        this.bookFlight.get("flightName")?.setValue(JSON.parse(res).name);
        this.bookFlight.get("price")?.setValue(JSON.parse(res).price);
        this.bookFlight.get("dateTime")?.setValue(JSON.parse(res).startdateTime);
        this.bookFlight.get("fromdesg")?.setValue(JSON.parse(res).fromdesg);
        this.bookFlight.get("todesg")?.setValue(JSON.parse(res).todesg);
      }, error => {
        alert("Flight not found");
        console.log('oops', error);
      });
    }
  }

}
