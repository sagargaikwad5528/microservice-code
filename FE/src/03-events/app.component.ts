import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    // template: "<h1>This demo is working !!!!!</h1>"
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {
    count:number = 55;
    name:string = "Mark";

    increase(){
        this.count++;
    }
    decrease(){
        this.count--;
    }

    doChange(n:string){
        this.name = n;
    }
}