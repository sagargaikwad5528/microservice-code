import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ThumbnailComponent } from "./components/thumbnail.component";



@NgModule({
    declarations: [AppComponent, ThumbnailComponent],// components, pipe, directives
    imports: [BrowserModule], // import other modules
    exports: [], // export modules from this module
    providers: [], // utils, common code -> reused
    bootstrap: [AppComponent] // starting component

})
export class AppModule { }