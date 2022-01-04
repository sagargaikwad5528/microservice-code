import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/08-services/services/user.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(public service:UserService) {
  }
  ngOnInit(): void {
  }

  updateName(n:string){
    this.service.user.name = n;
  }

}
