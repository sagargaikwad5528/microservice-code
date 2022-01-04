import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { UserService } from "./services/user.service";



@NgModule({
    declarations: [AppComponent, Comp1Component, Comp2Component],// components, pipe, directives
    imports: [BrowserModule], // import other modules
    exports: [], // export modules from this module
    providers: [UserService], // utils, common code -> reused
    bootstrap: [AppComponent] // starting component

})
export class AppModule { }