import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/15-flight-booking/service/user.service';

@Component({
  selector: 'app-trsanction-history-flight',
  templateUrl: './trsanction-history-flight.component.html',
  styleUrls: ['./trsanction-history-flight.component.css']
})
export class TrsanctionHistoryFlightComponent {
  flightList:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.callTransactionHistory();
  }

  callTransactionHistory(){
    this.userService.getTransHistoryFlights(localStorage.getItem("user"))
      .subscribe( data => {
        this.flightList=JSON.parse(data);
        console.log(">>>>",this.flightList.length);
        if(this.flightList.length<1){
          alert("No flights found");
        }
      });
  }
}
