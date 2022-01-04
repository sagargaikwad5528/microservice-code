import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/15-flight-booking/service/admin.service';
import { AdminPageComponent } from '../admin-page/admin-page.component';

@Component({
  selector: 'app-release-flight',
  templateUrl: './release-flight.component.html',
  styleUrls: ['./release-flight.component.css']
})
export class ReleaseFlightComponent {

  releaseFlight: FormGroup;
  constructor(private adminService:AdminService,private adminpage:AdminPageComponent) { 
    this.releaseFlight = new FormGroup({
      id: new FormControl("", [Validators.required]),
    });

  }

  testrelease() {
      this.adminService.releaseFlight(this.releaseFlight.value.id)
      .subscribe( data => {
        alert("Flight has been ID : "+this.releaseFlight.value.id+" Status : "+data);
        this.releaseFlight.get("id")?.setValue("");
        this.adminpage.loadAllFlights();
      });
    }

}
