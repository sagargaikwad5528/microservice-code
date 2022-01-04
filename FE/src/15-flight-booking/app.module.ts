import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
// import { PaymentComponent } from './components/payment/payment.component';
import { UserPageComponent } from "./modules/user/components/user-page/user-page.component";
import { AdminPageComponent} from "./modules/admin/components/admin-page/admin-page.component";
import { LoginPageComponent} from "./components/login-page/login-page.component"; 
import { AuthGuard } from "./auth.guard";



const routes:Routes = [
    // {path: "home", component: HomeComponent},
    // {path: "welcome/:name", component: WelcomeComponent},
    // {path: "payment", component: PaymentComponent},
    // {path: "user", component:UserPageComponent },
    // {path: "admin", component: AdminPageComponent},
    {path: "login", component: LoginPageComponent},

    {path: "admin", loadChildren: ()=>import("./modules/admin/admin.module").then(m=>m.AdminModule), canActivate: [AuthGuard]},
    {path: "user", loadChildren: ()=>import("./modules/user/user.module").then(m=>m.UserModule),canActivate: [AuthGuard]},

    {path: "**", redirectTo: "login"}
]

@NgModule({
    declarations: [AppComponent,   LoginPageComponent],// components, pipe, directives
    imports: [
        BrowserModule,
        ReactiveFormsModule,HttpClientModule,
        RouterModule.forRoot(routes)
    ], // import other modules
    exports: [], // export modules from this module
    providers: [AuthGuard], // utils, common code -> reused
    bootstrap: [AppComponent] // starting component

})
export class AppModule {

    

 }