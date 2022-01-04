import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/15-flight-booking/service/admin.service';
import { AdminPageComponent } from '../admin-page/admin-page.component';

@Component({
  selector: 'app-block-flight',
  templateUrl: './block-flight.component.html',
  styleUrls: ['./block-flight.component.css']
})
export class BlockFlightComponent  {

  blockFlight: FormGroup;
  constructor(private adminService:AdminService,private adminpage:AdminPageComponent) { 
    this.blockFlight = new FormGroup({
      id: new FormControl("", [Validators.required]),
    });

  }

  testBlock() {
      this.adminService.blockFlight(this.blockFlight.value.id)
      .subscribe( data => {
        alert("Flight has been ID : "+this.blockFlight.value.id+" Status : "+data);
        this.blockFlight.get("id")?.setValue("");
        this.adminpage.loadAllFlights();
        this.adminpage.loadAllFlights();
      });
    }
}
