import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cust-tickets',
  templateUrl: './cust-tickets.component.html',
  styleUrls: ['./cust-tickets.component.css']
})
export class CustTicketsComponent implements OnInit {
  constructor(private ticketService: TicketService, private router: Router) { }
  ticketList: any[] = [];
  displayedTicketList: any[] = [];
  ngOnInit() {

    this.ticketService.getTickets().subscribe((res: any[]) => {
      this.ticketList = res;
      this.computeDisplayedTicketlist();
    });
  }
  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id).subscribe((res: any[]) => {
      this.ticketService.getTickets().subscribe((res: any[]) => {
        this.ticketList = res;
        this.computeDisplayedTicketlist();
      });
    });
  }
  computeDisplayedTicketlist() {
    var userId=localStorage.getItem("userId");
    this.displayedTicketList=this.ticketList.filter(item => item?.createdBy?.id==userId)
  }
}
