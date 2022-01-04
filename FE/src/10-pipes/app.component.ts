import { Component } from "@angular/core";

class Book{

    constructor(
        public id:number, 
        public title:string, 
        public author:string
    ){}
}

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {
    books:Book[] = [new Book(125, "Comic", "Mark")];
    // strBooks:string = JSON.stringify(this.books);

    today:Date = new Date();
    now:number = Date.now();

    name:string = "haRiKUmAr";
}