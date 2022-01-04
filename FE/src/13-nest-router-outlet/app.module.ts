import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginComponent } from "./modules/user/components/login/login.component";
import { WelcomeComponent } from "./modules/user/components/welcome/welcome.component";
// import { UserModule } from "./modules/user/user.module";


const routes:Routes = [
    {path: "home", component: HomeComponent},
    {path: "payment", component: PaymentComponent},

    // {path: "login", component: LoginComponent},
    // {path: "welcome", component: WelcomeComponent},

    {path: "user1", loadChildren: ()=>import("./modules/user/user.module").then(m=>m.UserModule1)},

    {path: "**", redirectTo: "home"}
]

@NgModule({
    declarations: [AppComponent, HomeComponent, PaymentComponent],// components, pipe, directives
    imports: [
        BrowserModule,
        // UserModule,
        RouterModule.forRoot(routes)
    ], // import other modules
    exports: [], // export modules from this module
    providers: [], // utils, common code -> reused
    bootstrap: [AppComponent] // starting component

})
export class AppModule { }