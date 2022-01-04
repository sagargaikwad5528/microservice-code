import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent} from "../../components/login-page/login-page.component";
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { RemoveFlightComponent } from './components/remove-flight/remove-flight.component';
import { ModifyFlightComponent } from './components/modify-flight/modify-flight.component';
import { BlockFlightComponent } from './components/block-flight/block-flight.component';
import { ReleaseFlightComponent } from './components/release-flight/release-flight.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/15-flight-booking/auth.guard';

const routes: Routes = [

  {
    path: "",
    component: AdminPageComponent,
    children: [
      { path: "login", component: LoginPageComponent },
      { path: "add", component: AddFlightComponent },
      { path: "remove", component: RemoveFlightComponent },
      { path: "modify", component: ModifyFlightComponent },
      { path: "block", component: BlockFlightComponent },
      { path: "release", component: ReleaseFlightComponent },
    ]
  }

]
@NgModule({
  declarations: [
    AddFlightComponent,RemoveFlightComponent,ModifyFlightComponent,
    BlockFlightComponent,ReleaseFlightComponent,
    AdminPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ], providers: [AuthGuard]
})
export class AdminModule { }
