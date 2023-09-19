import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';
import { EngineerHomepageComponent } from './engineer-homepage/engineer-homepage.component';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { TicketComponent } from './ticket/ticket.component';
import { CustTicketsComponent } from './cust-tickets/cust-tickets.component';
import { EnggTicketsComponent } from './engg-tickets/engg-tickets.component';
import { ManagerTicketsComponent } from './manager-tickets/manager-tickets.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { CustTicketDetailComponent } from './cust-ticket-detail/cust-ticket-detail.component';
import { EnggTicketDetailComponent } from './engg-ticket-detail/engg-ticket-detail.component';
import { ManagerTicketDetailComponent } from './manager-ticket-detail/manager-ticket-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPwdComponent,
    RegisterComponent,
    AdminHomepageComponent,
    ManagerHomepageComponent,
    EngineerHomepageComponent,
    CustomerHomepageComponent,
    LogoutComponent,
    TicketComponent,
    CustTicketsComponent,
    EnggTicketsComponent,
    ManagerTicketsComponent,
    CreateTicketComponent,
    CustTicketDetailComponent,
    EnggTicketDetailComponent,
    ManagerTicketDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
