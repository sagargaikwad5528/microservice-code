import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/08-services/services/user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(public service:UserService) {
  }

  ngOnInit(): void {
  }

}
