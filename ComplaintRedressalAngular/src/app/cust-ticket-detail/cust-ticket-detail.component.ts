import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-cust-ticket-detail',
  templateUrl: './cust-ticket-detail.component.html',
  styleUrls: ['./cust-ticket-detail.component.css']
})
export class CustTicketDetailComponent {
  ticketId:any=0;
  ticket:any={};
  isFeedbackSet:boolean=false;
  constructor(private route: ActivatedRoute,private ticketService: TicketService,private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ticketId = params.get('id')||""
      this.ticketService.getTicket(this.ticketId).subscribe((res: any[]) => {
        this.ticket = res;  
        this.isFeedbackSet=!(this.ticket.feedback?this.ticket.feedback.trim():false)    
      });
    })
    
  }
  onSubmit() {
    this.ticketService.updateTicket(this.ticketId,this.ticket).subscribe((res: any[]) => {
      alert("done")  
      this.ticketService.getTicket(this.ticketId).subscribe((res: any[]) => {
        this.ticket = res;  
        this.isFeedbackSet=!(this.ticket.feedback?this.ticket.feedback.trim():false)    
      });  
   });
  }
}
