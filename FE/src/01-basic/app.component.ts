import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    // template: "<h1>This demo is working !!!!!</h1>"
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {
    constructor() {
        console.log("In App component")
    }
}