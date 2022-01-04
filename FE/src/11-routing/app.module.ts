import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes:Routes = [
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "welcome", component: WelcomeComponent},
    {path: "payment", component: PaymentComponent},

    {path: "**", redirectTo: "home"}
]

@NgModule({
    declarations: [AppComponent, HomeComponent, LoginComponent, PaymentComponent, WelcomeComponent],// components, pipe, directives
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ], // import other modules
    exports: [], // export modules from this module
    providers: [], // utils, common code -> reused
    bootstrap: [AppComponent] // starting component

})
export class AppModule { }