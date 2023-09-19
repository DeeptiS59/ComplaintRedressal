import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-tickets',
  templateUrl: './manager-tickets.component.html',
  styleUrls: ['./manager-tickets.component.css']
})
export class ManagerTicketsComponent implements OnInit {
  pincode: any;
  constructor(private ticketService: TicketService, private router: Router) { }
  ticketList: any[] = [];
  displayedList: any[] = [];
  filter: any = "all";
  ngOnInit() {
    this.ticketService.getTickets().subscribe((res: any[]) => {
      this.ticketList = res;
      this.computeDisplayedTicketList();
    });
    this.pincode = localStorage.getItem("userPincode");
  }
  computeDisplayedTicketList() {
    if (this.filter == "assignedPincode") {
      this.displayedList = this.ticketList.filter(item => item.pincode == this.pincode);
    }
    else {
      this.displayedList=this.ticketList;
    }
  }
  changeFilter(event: any) {
    this.filter = event.target?.value;
    this.computeDisplayedTicketList();
  }
}
