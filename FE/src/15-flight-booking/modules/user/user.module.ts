import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent} from "../../components/login-page/login-page.component";
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { TrsanctionHistoryFlightComponent } from './components/trsanction-history-flight/trsanction-history-flight.component';
import { CancelFlightComponent } from './components/cancel-flight/cancel-flight.component';
import { PaymentFlightComponent } from './components/payment-flight/payment-flight.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/15-flight-booking/auth.guard';

const routes: Routes = [

  {
    path: "",
    component: UserPageComponent,
    children: [
      { path: "login", component: LoginPageComponent },
      { path: "book", component: BookFlightComponent },
      { path: "search", component: SearchFlightComponent },
      { path: "history", component: TrsanctionHistoryFlightComponent },
      { path: "cancel", component: CancelFlightComponent },
      { path: "pay", component: PaymentFlightComponent },
    ]
  }

]
@NgModule({
  declarations: [BookFlightComponent,SearchFlightComponent , TrsanctionHistoryFlightComponent ,
    CancelFlightComponent , PaymentFlightComponent,UserPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ], providers: [AuthGuard]
})
export class UserModule { }
