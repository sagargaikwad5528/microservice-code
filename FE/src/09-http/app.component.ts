import { Component } from "@angular/core";
import { UserService } from "./services/user.service";

@Component({
    selector: "app-root",
    // template: "<h1>This demo is working !!!!!</h1>"
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {

    users:any[] = [];
    
    constructor(private userService:UserService){
        this.findAllUsers();
    }

    findAllUsers(){
        this.userService.fetchAllUsers()
        .subscribe((res:any)=>{
            console.log(res);
            this.users = res;
        })
    }
    findUserById(){}
    saveUser(){
        let user = {name: "demo", email: "demo@321"}

        this.userService.saveUser(user)
        .subscribe((res:any)=>{
            console.log(res);
            this.findAllUsers();
        })

    }
}