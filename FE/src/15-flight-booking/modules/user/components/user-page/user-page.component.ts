import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let role=localStorage.getItem("role");
    if(role!="" && role!="user"){
      alert("Not authorized!");
      this.router.navigate(["/","login"]);
    }
  }

}
