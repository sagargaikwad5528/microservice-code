import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    // template: "<h1>This demo is working !!!!!</h1>"
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {

    thumbs:any[]=[
        {path: "https://picsum.photos/300/450", title: "onion", describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora nesciunt, doloremque sit recusandae sed itaque est? Architecto, ab! Vero repellendus ullam non unde impedit voluptatem obcaecati eaque dolore quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora nesciunt, doloremque sit recusandae sed itaque est? Architecto, ab! Vero repellendus ullam non unde impedit voluptatem obcaecati eaque dolore quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora nesciunt, doloremque sit recusandae sed itaque est? Architecto, ab! Vero repellendus ullam non unde impedit voluptatem obcaecati eaque dolore quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora nesciunt, doloremque sit recusandae sed itaque est? Architecto, ab! Vero repellendus ullam non unde impedit voluptatem obcaecati eaque dolore quo."},
        {path: "https://picsum.photos/301/450", title: "cheese"},
        {path: "https://picsum.photos/300/451", title: "tomato"},
        {path: "https://picsum.photos/299/449", title: "vegburger"}
    ]

    constructor() {
        console.log("In App component")
    }
}