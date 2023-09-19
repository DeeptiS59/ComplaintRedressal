import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';
import { EngineerHomepageComponent } from './engineer-homepage/engineer-homepage.component';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';
import { AdminGuardService } from './admin-guard.service';
import { ManagerGuardService } from './manager-guard.service';
import { CustomerGuardService } from './customer-guard.service';
import { EngineerGuardService } from './engineer-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { CustTicketsComponent } from './cust-tickets/cust-tickets.component';
import { ManagerTicketsComponent } from './manager-tickets/manager-tickets.component';
import { EnggTicketsComponent } from './engg-tickets/engg-tickets.component';
import { CustTicketDetailComponent } from './cust-ticket-detail/cust-ticket-detail.component';
import { ManagerTicketDetailComponent } from './manager-ticket-detail/manager-ticket-detail.component';
import { EnggTicketDetailComponent } from './engg-ticket-detail/engg-ticket-detail.component';

const routes: Routes = [
{ path:"login", component:LoginComponent},
{ path:"admin/createUser", component:RegisterComponent ,canActivate:[AdminGuardService]},
{ path:"resetpwd",component:ResetPwdComponent,canActivate:[AdminGuardService]},
{ path:"admin/homepage", component:AdminHomepageComponent, canActivate:[AdminGuardService]},
{ path:"manager/homepage", component:ManagerHomepageComponent ,canActivate:[ManagerGuardService]},
{ path:"manager/tickets", component:ManagerTicketsComponent,canActivate:[ManagerGuardService]},
{ path:"manager/tickets/:id", component:ManagerTicketDetailComponent ,canActivate:[ManagerGuardService]},
{ path:"engineer/homepage",component:EngineerHomepageComponent ,canActivate:[EngineerGuardService]},
{ path:"engineer/tickets",component:EnggTicketsComponent, canActivate:[EngineerGuardService]},
{ path:"engineer/tickets/:id", component:EnggTicketDetailComponent ,canActivate:[EngineerGuardService]},
{ path:"customer/homepage", component:CustomerHomepageComponent ,canActivate:[CustomerGuardService]},
{ path:"customer/createTicket", component:CreateTicketComponent ,canActivate:[CustomerGuardService]},
{ path:"customer/tickets", component:CustTicketsComponent ,canActivate:[CustomerGuardService]},
{ path:"customer/tickets/:id", component:CustTicketDetailComponent ,canActivate:[CustomerGuardService]},
{ path:"logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
