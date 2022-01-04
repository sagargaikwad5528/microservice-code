import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/15-flight-booking/service/user.service';

@Component({
  selector: 'app-cancel-flight',
  templateUrl: './cancel-flight.component.html',
  styleUrls: ['./cancel-flight.component.css']
})
export class CancelFlightComponent  {
  cancelFlight: FormGroup;
  constructor(private userService: UserService) {
    this.cancelFlight = new FormGroup({
      pnr: new FormControl("", [Validators.required]),
    });
  }

  cancelFlights(){
    this.userService.cancelFlights(this.cancelFlight.value.pnr)
    .subscribe(res => {
      console.log(res);
      alert(res);
      this.cancelFlight.get("pnr")?.setValue("");
    }, error => {
      alert("Failed to cancel ticket");
      console.log('oops', error);
    });
  }


}
