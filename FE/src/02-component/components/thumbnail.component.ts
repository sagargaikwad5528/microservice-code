import { Component, Input } from "@angular/core";

@Component({
    selector: "app-thumbnail",
    templateUrl: "thumbnail.component.html",
    styleUrls: ["thumbnail.component.css"]
})
export class ThumbnailComponent{
    @Input()
    title:string = "some title";
    @Input()
    describe:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora nesciunt, doloremque sit recusandae sed itaque est? Architecto, ab! Vero repellendus ullam non unde impedit voluptatem obcaecati eaque dolore quo.";
    @Input()
    imagePath:string = "https://i.picsum.photos/id/235/100/150.jpg?hmac=cZLI-WTNYbCJWWCWnesKVNNrSS3717eYwu3QfarAfWQ";
}