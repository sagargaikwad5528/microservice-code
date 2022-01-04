import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ButtonComponent } from './components/button/button.component';



@NgModule({
    declarations: [AppComponent, ButtonComponent],// components, pipe, directives
    imports: [BrowserModule], // import other modules
    exports: [], // export modules from this module
    providers: [], // utils, common code -> reused
    bootstrap: [AppComponent] // starting component

})
export class AppModule { }