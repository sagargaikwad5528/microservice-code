import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {
    flag:boolean = true;
    myClass:string = "success";
    myStyle:any = {
        "color":"blue",
        "font-size":"2em",
        "text-align": "center"
    }

    toggle(){
        this.flag = !this.flag;

        if(this.flag){
            this.myClass = "success";
            this.myStyle["text-align"] = "left";
        } else {
            this.myClass = "error";
            this.myStyle["text-align"] = "right";
        }
    }
}