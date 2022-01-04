import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {
    loginForm:FormGroup;

    constructor(){
        this.loginForm = new FormGroup({
            "username": new FormControl("", [
                Validators.required
            ]),
            "password": new FormControl("", [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(8)
                // Validators.pattern("")
            ])
        })
    }

    getLogin(){
        console.log("Valid: "+this.loginForm.valid)
        console.log(this.loginForm.value)
        console.log(this.loginForm)
    }
}