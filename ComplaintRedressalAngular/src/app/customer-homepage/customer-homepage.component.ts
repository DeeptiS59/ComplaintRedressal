import { Component,OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.css']
})
export class CustomerHomepageComponent {
  constructor(private ticketService: TicketService, private router:Router) { }
  ticket:any={}
  onSubmit()
  {
    this.ticket.createdBy={id:localStorage.getItem("userId")}
    this.ticketService.createTicket(this.ticket).subscribe((res: any[]) => {
       alert("done")
       this.router.navigate(["/customer/homepage"])
    });
  }
 
}
