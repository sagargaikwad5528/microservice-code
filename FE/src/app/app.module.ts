import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminPageComponent } from '../15-flight-booking/modules/admin/components/admin-page/admin-page.component';
import { AddFlightComponent } from '../15-flight-booking//modules/admin/components//add-flight/add-flight.component';
import { RemoveFlightComponent } from '../15-flight-booking/modules/admin//components//remove-flight/remove-flight.component';
import { ModifyFlightComponent } from '../15-flight-booking/modules/admin//components//modify-flight/modify-flight.component';
import { BlockFlightComponent } from '../15-flight-booking/modules/admin//components//block-flight/block-flight.component';
import { ReleaseFlightComponent } from '../15-flight-booking/modules/admin/components/release-flight/release-flight.component';
import { LoginPageComponent } from 'src/15-flight-booking/components/login-page/login-page.component';
import { BookFlightComponent } from 'src/15-flight-booking/modules/user/components/book-flight/book-flight.component';
import { SearchFlightComponent } from 'src/15-flight-booking/modules/user/components/search-flight/search-flight.component';
import { TrsanctionHistoryFlightComponent } from 'src/15-flight-booking/modules/user/components/trsanction-history-flight/trsanction-history-flight.component';
import { CancelFlightComponent } from 'src/15-flight-booking/modules/user/components/cancel-flight/cancel-flight.component';
import { PaymentFlightComponent } from 'src/15-flight-booking/modules/user/components/payment-flight/payment-flight.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    AddFlightComponent, 
    RemoveFlightComponent,
    ModifyFlightComponent,
    BlockFlightComponent,
    ReleaseFlightComponent,
    LoginPageComponent,
    BookFlightComponent,
    SearchFlightComponent,
    TrsanctionHistoryFlightComponent,
    CancelFlightComponent,
    PaymentFlightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
