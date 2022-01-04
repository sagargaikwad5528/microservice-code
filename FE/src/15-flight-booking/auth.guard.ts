import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { catchError } from "rxjs/internal/operators/catchError";
import { map } from "rxjs/internal/operators/map";

@Injectable()
export class AuthGuard  {
  constructor(private router: Router){}
    httpClient: any; 
	canActivate( ) { 
    // let role =localStorage.getItem("role");
    // alert(this.router.url +">>"+ role);
    return true;
    // if(role!="" && this.router.url=="/user" && "admin"!=role ){
    //   alert("Only user can access this page!");
    //   this.router.navigate(["/","admin"]);
    //   return true;

    // }else 
    // if( role!="" && this.router.url=="/admin" && "user"!=role ){
    //   alert("Only admin can access this page!");
    //   this.router.navigate(["/","user"]);
    //   return true;

    // }else{
    //   return true;
    // } 
	}
}
