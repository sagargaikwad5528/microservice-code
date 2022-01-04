import { Component, OnInit } from "@angular/core";
import { Book } from "./model/book";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent implements OnInit {
    books:Book[]=[];

    constructor(){}
    
    ngOnInit(){
        // fetch data from db -> 5 mins
        // this.books.push({id: 124, title: "This is comic book", author: "Mark", price: 8, rating: 3.7});
        // this.books.push(new Book(12, "Country maps", "Carl", 3));
        // this.books.push(new Book(51, "IronMan", "Tony", 5, 4.9));
        // this.books.push(new Book(87, "BatMan", "Miley", 5, 4.8));
    }
}