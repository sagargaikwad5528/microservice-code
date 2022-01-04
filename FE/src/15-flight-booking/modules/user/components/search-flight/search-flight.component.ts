import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/15-flight-booking/service/user.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent  {
  flightList:any;
  searchFlight: FormGroup;
  constructor(private userService:UserService) { 
    this.searchFlight = new FormGroup({
      dateTime: new FormControl("", [Validators.required]),
      fromdesg: new FormControl("", [Validators.required]),
      todesg: new FormControl("", [Validators.required]),
    });

  }

  searchFlights(){
    this.userService.searchFlights(this.searchFlight.value)
      .subscribe( data => {
        this.flightList=JSON.parse(data);
        console.log(">>>>",this.flightList.length);
        if(this.flightList.length<1){
          alert("No flights found");
        }
      });
  }

  

}
