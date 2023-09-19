import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-manager-ticket-detail',
  templateUrl: './manager-ticket-detail.component.html',
  styleUrls: ['./manager-ticket-detail.component.css']
})
export class ManagerTicketDetailComponent implements OnInit{
  ticketId:any=0;
  ticket:any={assignedTo:{}};
  userList:any[]=[];
  displayedUserList:any[]=[];
  pincode:any;
  constructor(private route: ActivatedRoute,private ticketService: TicketService,private loginService:LoginService,private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ticketId = params.get('id')||""
      this.ticketService.getTicket(this.ticketId).subscribe((res: any[]) => {
        this.ticket = res;
        this.ticket.assignedTo=this.ticket.assignedTo||{};
      });
    })
    this.loginService.getUsers().subscribe((res: any[]) => {
      this.userList = res;
      this.computeDisplayedUserList();
  });
  this.pincode = localStorage.getItem("userPincode");
}
  computeDisplayedUserList() {
    this.displayedUserList=this.userList.filter(item => item?.role=="engineer")
  }
  onSubmit() {
    this.ticketService.updateTicket(this.ticketId,this.ticket).subscribe((res: any[]) => {
      alert("done")    
   });
  }
}

