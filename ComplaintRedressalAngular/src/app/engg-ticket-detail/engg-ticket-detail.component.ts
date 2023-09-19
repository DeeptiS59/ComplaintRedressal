import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-engg-ticket-detail',
  templateUrl: './engg-ticket-detail.component.html',
  styleUrls: ['./engg-ticket-detail.component.css']
})
export class EnggTicketDetailComponent implements OnInit {

  ticketId:any=0;
  ticket:any={};
  constructor(private route: ActivatedRoute,private ticketService: TicketService,private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ticketId = params.get('id')||""
      this.ticketService.getTicket(this.ticketId).subscribe((res: any[]) => {
        this.ticket = res;      
      });
    })    
  }
  onSubmit() {
    this.ticketService.updateTicket(this.ticketId,this.ticket).subscribe((res: any[]) => {
      alert("done")    
   });
  }
}
