import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/15-flight-booking/service/admin.service';
import { AdminPageComponent } from '../admin-page/admin-page.component';

@Component({
  selector: 'app-remove-flight',
  templateUrl: './remove-flight.component.html',
  styleUrls: ['./remove-flight.component.css']
})
export class RemoveFlightComponent {

  removeFlight: FormGroup;
  constructor(private adminService:AdminService,private adminpage:AdminPageComponent) { 
    this.removeFlight = new FormGroup({
      id: new FormControl("", [Validators.required]),
    });

  }

  testremove() {
      this.adminService.removeFlight(this.removeFlight.value.id)
      .subscribe( data => {
        alert("Flight has been ID : "+this.removeFlight.value.id+" Status : "+data);
        this.removeFlight.get("id")?.setValue("");
        this.adminpage.loadAllFlights();
      });
    }

}
