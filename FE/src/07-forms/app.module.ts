import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";



@NgModule({
    declarations: [AppComponent],// components, pipe, directives
    imports: [BrowserModule, ReactiveFormsModule], // import other modules
    exports: [], // export modules from this module
    providers: [], // utils, common code -> reused
    bootstrap: [AppComponent] // starting component

})
export class AppModule { }