import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [

  {
    path: "",
    component: UserComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "welcome", component: WelcomeComponent }
    ]
  }

]
@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule1 { }
