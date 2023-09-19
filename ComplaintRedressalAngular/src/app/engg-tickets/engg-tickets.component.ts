import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-engg-tickets',
  templateUrl: './engg-tickets.component.html',
  styleUrls: ['./engg-tickets.component.css']
})
export class EnggTicketsComponent implements OnInit{
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
    this.displayedTicketList=this.ticketList.filter(item => item?.assignedTo?.id==userId)
  }
}

  
