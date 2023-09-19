import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { pincodeList } from '../pincode.service';
@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  constructor(private ticketService: TicketService, private router:Router) { }
  ticket:any={}
  pincodeList:number[]=pincodeList;
  onSubmit()
  {
    this.ticket.createdBy={id:localStorage.getItem("userId")}
    this.ticketService.createTicket(this.ticket).subscribe((res: any[]) => {
       alert("done")
       this.router.navigate(["/customer/homepage"])
    });
  }
}
