import { Component } from "@angular/core";
import { UserService } from "./services/user.service";

@Component({
    selector: "app-root",
    // template: "<h1>This demo is working !!!!!</h1>"
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {
    constructor(public userService:UserService) {
    }
}