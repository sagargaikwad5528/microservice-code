import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username:string="";
  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(pathVariables=>{
      console.log(pathVariables)
      this.username=pathVariables['name'];
    })
  }

  ngOnInit(): void {
  }

}
