import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/15-flight-booking/service/common.service';
// import * as jwt_decode from "jwt-decode";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  logincheck: FormGroup;
  constructor(private router: Router, private commonService: CommonService) {
    localStorage.setItem("role", "");
    this.logincheck = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }


  getLogin() {

    if (this.logincheck.value.username == "admin") {
      this.commonService.validateAdminUser(this.logincheck.value)
        .subscribe((res: any) => {
          console.log(res);
          if (res.token) {
            // console.log(jwt_decode(res.token));
            let temp: any;
            temp = jwt_decode(res.token);
            console.log(temp.role);
            localStorage.setItem("token", "Bearer " + res.token);
            // localStorage.setItem("role",res.role);
            localStorage.setItem("role", temp.role);
            localStorage.setItem("user", this.logincheck.value.username);
            this.router.navigate(["/", "admin"]);
          } else {

          }
        }, error => {
          alert(error.error.error);
          console.log('oops', error);
        });

    } else {
      this.commonService.validateUser(this.logincheck.value)
        .subscribe((res: any) => {
          console.log(res);
          if (res.token) {
            let temp: any;
            temp = jwt_decode(res.token);
            console.log(">>>>"+temp.role);
            localStorage.setItem("token", "Bearer " + res.token);
            localStorage.setItem("role", temp.role);
            localStorage.setItem("user", this.logincheck.value.username);
            this.router.navigate(["/", "user"]);
          } else {

          }
        }, error => {
          alert(error.error.error);
          console.log('oops', error);
        });

    }
  }

}
